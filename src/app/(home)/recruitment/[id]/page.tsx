"use client"

import Card from "@/components/Card"
import { ChevronIcon } from "@/constants/icons"
import { useGetRecruitmentByIdQuery } from "@/redux/services/recruitmentApi"
import Link from "next/link"

export default function Page({ params }: { params: { id: string } }) {
    const { data } = useGetRecruitmentByIdQuery({ params: { id: params.id } })

    return (
        <div className="flex flex-col w-full h-[80vh] gap-6">
            <Link href="/recruitment" className="flex items-center gap-2 font-medium text-violet-600 w-fit">
                <ChevronIcon className="scale-90 -rotate-90 stroke-violet-600" />
                Back
            </Link>

            <Card className="flex flex-col h-full gap-8 p-4 rounded-md">
                <div className="grid">
                    <div className="font-medium text-slate-400">{`${data?.type} / ${data?.location}`}</div>
                    <h1 className="text-3xl font-bold">{data?.title}</h1>
                </div>

                <hr />

                <div className="grid gap-4 overflow-auto xl:flex xl:gap-10 scroll-minimalist">
                    <div className="w-full px-4" dangerouslySetInnerHTML={{ __html: data?.description }}></div>

                    <div className="grid gap-4 xl:max-w-[30rem] w-full h-fit px-4">
                        <Card className="grid rounded-md">
                            <div className="px-4 py-2 font-medium">Company</div>
                            <hr />
                            <div className="grid p-4 text-sm">
                                {data?.company}
                                {data?.company_url && <Link href={data?.company_url} target="_blank" className="underline text-violet-600">{data?.company_url}</Link>}
                            </div>
                        </Card>

                        <Card className="grid rounded-md">
                            <div className="px-4 py-2 font-medium">How to apply</div>
                            <hr />
                            <div className="p-4 text-sm" dangerouslySetInnerHTML={{ __html: data?.how_to_apply }}></div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    )
}