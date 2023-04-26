import { ChangeEvent, KeyboardEvent } from "react"
import { SearchIcon } from "@/constants/icons"

type Props = {
    onEnter?(value: string): void
    onChange?(value: string): void
    value?: string
    placeholder?: string
    className?: string
    iconClassName?: string
    inputClassName?: string
}

export default function Search({ onEnter, value, placeholder, className, iconClassName, inputClassName, onChange }: Props) {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onEnter && e.key === 'Enter') {
            onEnter(e.currentTarget.value)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <div className={["flex flex-row gap-6 rounded-lg text-sm bg-[#F9F9F9] text-[#898989] p-2 w-80", className].join(" ")}>
            <div className="my-auto">
                <SearchIcon className={["fill-[#898989] scale-110", iconClassName].join(' ')} />
            </div>
            <input onKeyDown={handleKeyDown} onChange={handleChange} value={value} type="text" className={["w-full bg-inherit focus:outline-none", inputClassName].join(' ')} placeholder={placeholder} />
        </div>
    )
}