import Navbar from "./Parts/Navbar"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col h-full max-h-screen">
            <Navbar />
            <section className="container h-full px-6 py-8 mx-auto">
                {children}
            </section>
        </div>
    )
}