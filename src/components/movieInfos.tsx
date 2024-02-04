import {env} from 'node:process';
import Movie from "./movie";
import {IMovie} from "@/interfaces/movie";
import styles from "../styles/home.module.css";

const fetchMovies = async (): Promise<IMovie[]> => {
    const response = await fetch(`${env.API_URL}`);
    return await response.json();
}

export default async function MovieInfo() {

    const movies = await fetchMovies()
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path}/>
            ))}
        </div>
    );
}