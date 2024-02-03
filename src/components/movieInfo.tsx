import { env } from 'node:process';
import {Movie} from "@/interfaces/movie";


async function fetchMovie(id: string): Promise<Movie> {
    const response = await fetch(`${env.API_URL}/${id}`);
    return await response.json();
}

export default async function MovieInfos({id}: { id: string }) {

    const movie = await fetchMovie(id);
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>]
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>
    );
}