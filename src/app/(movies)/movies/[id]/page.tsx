import {Suspense} from "react";
import MovieVideos from "@/components/movieVideos";
import MovieInfo, {fetchMovie} from "@/components/movieInfo";


interface IParams {
    params: {
        id: string;
    };
}


export async function generateMetadata({params: {id}}: IParams) {
    const movie = await fetchMovie(id);
    return {
        title: movie.title,
    };
}

export default function Page({params: {id}}: IParams ) {
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