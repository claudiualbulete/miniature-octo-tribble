import { Link } from "react-router-dom";
import { Button } from "../ui";

export const Header = () => {
    return (
        <div className="container mx-auto p-4 flex items-center justify-between">
            <Link to="/" title="Go home">Hangman</Link>

            <Link to="/account" title="Login">
                <Button title="Click to login">
                    Login
                </Button>
            </Link>
        </div>
    );
}
