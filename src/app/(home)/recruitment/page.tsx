"use client"

import { FormEvent, UIEvent, useEffect, useState } from "react"
import ListBox from "@/components/ListBox"
import Search from "@/components/Search"
import { useGetRecruitmentQuery, RecruitmentProps } from "@/redux/services/recruitmentApi"
import Button from "@/components/Button"
import Card from "@/components/Card"
import Link from "next/link"
import moment from "moment"

const typeData = [
    { id: 0, name: 'Part Time' },
    { id: 1, name: 'Full Time' }
]

export default function Page() {
    const [jobs, setJobs] = useState<any[]>([])

    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [type, setType] = useState(typeData[0])
    const [hasNextPage, setHasNextPage] = useState(true)

    const [params, setParams] = useState<RecruitmentProps["params"]>({
        page: 1,
        full_time: type.id ? true : false
    })

    const { data, isError } = useGetRecruitmentQuery({ params })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setParams({
            page: 1,
            description: description || undefined,
            location: location || undefined,
            full_time: type.id ? true : false
        })

        setHasNextPage(true)
    }

    const handleScroll = (
        e: UIEvent<HTMLDivElement, globalThis.UIEvent>
    ) => {
        const { scrollHeight, scrollTop, clientHeight } = e.currentTarget

        if ((scrollHeight - scrollTop === clientHeight) && hasNextPage) {
            setParams({
                ...params,
                page: params.page + 1
            })
        }
    }

    useEffect(() => {
        if (isError) {
            setHasNextPage(false)
        }
    }, [isError])

    useEffect(() => {
        if (data) {
            if (params.page == 1) {
                setJobs(data)
            } else {
                setJobs([...jobs, ...data])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div className="flex flex-col w-full h-[80vh] gap-6">
            <form className="grid gap-4 lg:gap-8 lg:flex" onSubmit={handleSubmit}>
                <div className="grid w-full gap-4 lg:gap-8 sm:flex">
                    <Search
                        placeholder="Search by description"
                        className="w-full border rounded-md border-slate-400"
                        value={description}
                        onChange={setDescription}
                    />

                    <Search
                        placeholder="Search by location"
                        className="w-full border rounded-md border-slate-400"
                        value={location}
                        onChange={setLocation}
                    />
                </div>

                <div className="flex gap-4 lg:gap-8">
                    <ListBox
                        data={typeData}
                        onChange={setType}
                        value={type}
                        className="lg:min-w-[10rem] w-full"
                    />

                    <Button
                        type="submit"
                        label="Search"
                        className="px-10 text-sm font-medium text-white transition-all rounded-md bg-violet-600 hover:bg-violet-800"
                    />
                </div>
            </form>

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Job List</h1>
                <div className="text-sm text-slate-400">{jobs?.filter((v: any) => v != null).length} Data</div>
            </div>

            <div className="h-full overflow-auto scroll-minimalist" onScroll={handleScroll}>
                <div className="grid gap-4 h-fit">
                    {jobs?.filter((v: any) => v != null)?.map(({ id, title, location, company, type, created_at }: any) => (
                        <Card className="grid gap-2 p-6 rounded-md" key={id}>
                            <div className="grid grid-cols-2 gap-2 font-semibold">
                                <Link href={'/recruitment/' + id} className="text-xl truncate text-violet-600">{title}</Link>
                                <div className="text-end">{location}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 font-medium text-slate-500">

                                <div className="flex gap-2">
                                    <span className="truncate">{company}</span>
                                    -
                                    <span className="text-violet-600 whitespace-nowrap">{type}</span>
                                </div>
                                <div className="text-end">{moment(new Date(created_at)).fromNow()}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}