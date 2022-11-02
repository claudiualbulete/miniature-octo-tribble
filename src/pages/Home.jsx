import { DefaultLayout } from "../layout";

export const HomePage = () => {
    return (
        <DefaultLayout>
            <div className="container mx-auto p-4">
                Notice the use of %PUBLIC_URL% in the tags above.
                It will be replaced with the URL of the `public` folder during the build.
                Only files inside the `public` folder can be referenced from the HTML.
            </div>
        </DefaultLayout>
    )
}
