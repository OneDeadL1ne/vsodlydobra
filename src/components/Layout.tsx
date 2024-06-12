import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex flex-col h-screen mr-[10%] ml-[10%]">
            <header className="">
                <Header />
            </header>
            <main
                className="min-w-full flex-grow"
                onClick={(event: React.SyntheticEvent) => {
                    event.preventDefault();
                    const target = event.target as HTMLAnchorElement;
                    const id = target.getAttribute("href")?.replace("#", "");
                    const element = document.getElementById(String(id));
                    element?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
                <Outlet />
            </main>
            <footer className="w-full row-auto">
                <Footer />
            </footer>
        </div>
    );
}
