import type {Metadata} from "next";
import {Suspense} from "react";
import MovieInfos from "@/components/movieInfos";

export const metadata: Metadata = {
    title: "Home",
};


export default function Page() {
    return (
        <div>
            <h1>Home</h1>
            <Suspense fallback={
                <div>
                    <h1>Loading...</h1>
                </div>
            }>
                <MovieInfos/>
            </Suspense>
        </div>
    );
}
