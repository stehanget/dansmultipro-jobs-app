import Card from "@/components/Card";
import LoginButton from "./Parts/LoginButton";

export default function Page() {
    return (
        <Card className="grid items-center w-full max-w-md gap-8 p-8 rounded-md h-72">
            <div className="grid gap-6">
                <h1 className="text-3xl font-bold text-center text-primary-gray">Log In</h1>
                <p className="text-sm font-medium text-center text-secondary-gray">Lorem ipsum dolor sit.</p>
            </div>

            <LoginButton />
        </Card>
    )
}