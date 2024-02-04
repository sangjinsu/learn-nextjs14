import {env} from 'node:process';
import {IMovie} from "@/interfaces/movie";
import Image from "next/image";
import styles from "../styles/movieInfo.module.css";


export async function fetchMovie(id: string): Promise<IMovie> {
    const response = await fetch(`${env.API_URL}/${id}`);
    return await response.json();
}

export default async function MovieInfos({id}: { id: string }) {

    const movie = await fetchMovie(id);
    return (
        <div className={styles.container}>
            <Image className={styles.poster} priority={true} width={250} height={400} src={movie.poster_path}
                   alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3> ✨ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a className={styles.link} href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>

        </div>
    );
}