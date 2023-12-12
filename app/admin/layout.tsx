import Header from "../components/Header"
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="max-w-[1024px] m-auto">
            <div className="flex">
                <Header />
                <div className="p-12 w-screen">
                {children}
                </div>
            </div>

        </div>


    )
}