import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "About Us",
};

export default function Page() {
    return (
        <div>
            <h1>About us</h1>
            <p>
                We are a small company that is passionate about technology and the web.
            </p>
        </div>
    );
}