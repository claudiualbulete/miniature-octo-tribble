import { Header, Footer } from "../components/common";

export const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <header className="shadow bg-blue-300">
                <Header/>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="border border-top bg-blue-300">
                <Footer/>
            </footer>
        </div>
    );
}
