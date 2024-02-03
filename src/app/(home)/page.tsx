import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home",
};


const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";


export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

const fetchMovies = async (): Promise<Movie[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(URL);
    return await response.json();
}
export default async function Page() {
    const movies = await fetchMovies();

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
