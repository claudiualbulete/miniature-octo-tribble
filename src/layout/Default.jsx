import { Header, Footer } from "../components/common";

export const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <header className="shadow bg-black text-white">
                <Header/>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="border border-top bg-black text-white">
                <Footer/>
            </footer>
        </div>
    );
}
