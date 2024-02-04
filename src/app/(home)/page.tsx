import type {Metadata} from "next";
import {Suspense} from "react";
import MovieList from "@/components/movieList";

export const metadata: Metadata = {
    title: "Home",
};


export default function Page() {
    return (
        <div>
            <Suspense fallback={
                <div>
                    <h1>Loading...</h1>
                </div>
            }>
                <MovieList/>
            </Suspense>
        </div>
    );
}
