type Props = {
    className?: string
    labelClassName?: string
    children?: JSX.Element[] | JSX.Element
    label?: string
    onClick?(value?: any): void
    type: 'button' | 'reset' | 'submit'
    disabled?: boolean
}

export default function Button({ className, type, children, label, onClick, disabled, labelClassName }: Props) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={['flex flex-row justify-center items-center gap-2 p-2 rounded-lg cursor-pointer select-none focus-visible:outline-none disabled:cursor-default', className].join(' ')}
            disabled={disabled}
        >
            {label && <p className={["capitalize text-inherit", labelClassName].join(" ")}>{label}</p>}
            {children}
        </button>
    )
}