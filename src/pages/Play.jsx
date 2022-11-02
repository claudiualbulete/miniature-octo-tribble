import { DefaultLayout } from "../layout";
import { Button } from "../components/ui";
import { Link } from "react-router-dom";

export const PlayPage = () => {
    return (
        <DefaultLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Play the Game</h1>

                <Link to="/route-that-does-not-exist">
                    <Button element="span" title="remove this sh*t">
                        error page
                    </Button>
                </Link>
            </div>
        </DefaultLayout>
    )
}
