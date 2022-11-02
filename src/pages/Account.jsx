import { DefaultLayout } from "../layout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";

export const AccountPage = () => {
    return (
        <DefaultLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">My Account</h1>

                <Link to="/">
                    <Button element="span">
                        Logout
                    </Button>
                </Link>
            </div>
        </DefaultLayout>
    )
}
