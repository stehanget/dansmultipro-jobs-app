type Props = {}

export default function Navbar({ }: Props) {
    return (
        <header className="min-h-[5rem] h-[5rem] top-0 z-20">
            <nav className="fixed h-[5rem] w-full flex bg-violet-600 border-b-[#E3E8F2] border-b-[1px]">
                <div className="container mx-auto">
                    <div className="grid items-center justify-center h-full px-6 text-lg font-bold text-white uppercase w-fit text-secondary-orange">DMP Jobs</div>
                </div>
            </nav>
        </header>
    )
}