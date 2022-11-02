import { CenterLayout } from "../layout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";

export const NotFoundPage = () => {
    return (
        <CenterLayout>
            <h1 className="text-4xl mb-3 animate-pulse">404</h1>

            <p className="mb-4">Page not found</p>

            <Link to="/" title="Back home">
                <Button title="Go back home" element="span">
                    Go Back home
                </Button>
            </Link>
        </CenterLayout>
    )
}
