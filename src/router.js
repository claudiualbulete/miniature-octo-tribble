import { createBrowserRouter } from "react-router-dom";
import { AccountPage, HomePage, PlayPage, NotFoundPage } from "./pages";

export const router = createBrowserRouter(
    [{
        path: "/",
        element: <HomePage/>
    }, {
        path: "/account",
        element: <AccountPage/>
    }, {
        path: "/play",
        element: <PlayPage/>
    }, {
        path: "*",
        element: <NotFoundPage/>
    }]
)

export default router