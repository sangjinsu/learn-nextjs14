import Link from "next/link";
import { env } from 'node:process';

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
    const response = await fetch(`${env.API_URL}`);
    return await response.json();
}

export default async function MovieInfo() {

    const movies = await fetchMovies()
    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link href={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}