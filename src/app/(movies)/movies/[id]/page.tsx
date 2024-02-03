import {Suspense} from "react";
import MovieVideos from "@/components/movieVideos";
import MovieInfo from "@/components/movieInfo";

export const metadata = {
    title: "Movie",
};

export default function Page({params: {id}}: { params: { id: string } }) {
    return (
        <div>
            <Suspense fallback={
                <div>
                    <h1>Loading...</h1>
                </div>
            }>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={
                <div>
                    <h1>Loading...</h1>
                </div>
            }>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}