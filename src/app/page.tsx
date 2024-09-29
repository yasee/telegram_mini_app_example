import Top from "./components/Top";

export default function Home() {
    return (
        <div className="h-screen">
            <main className="flex flex-col gap-y-5 justify-center items-center h-full">
                <Top />
            </main>
        </div>
    );
}
