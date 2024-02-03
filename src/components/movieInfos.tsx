import Link from "next/link";
import {env} from 'node:process';
import {Movie} from "@/interfaces/movie";

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