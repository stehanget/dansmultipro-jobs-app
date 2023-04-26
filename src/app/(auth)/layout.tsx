export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="relative grid h-screen gap-4">
            <div className="flex items-center justify-center p-4 col-span-auto">
                {children}
            </div>
        </section>
    )
}