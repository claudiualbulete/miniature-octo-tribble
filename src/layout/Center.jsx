export const CenterLayout = ({ children }) => {
    return (
        <div className="flex flex-col flex-grow w-screen h-screen justify-center items-center bg-black text-white">
            {children}
        </div>
    );
}
