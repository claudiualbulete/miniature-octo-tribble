import { DefaultLayout } from "../layout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";

export const HomePage = () => {
    return (
        <DefaultLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-black">Home page</h1>

                <Link to="/play" title="Play a game">
                    <Button element="span" title="Play the game">
                        Play
                    </Button>
                </Link>
            </div>
        </DefaultLayout>
    )
}
