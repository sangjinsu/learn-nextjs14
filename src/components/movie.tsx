"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/movie.module.css";
import {useRouter} from "next/navigation";

interface IMovieProps {
    id: number;
    title: string;
    poster_path: string;
}

export default function Movie({id, title, poster_path}: IMovieProps) {

    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }

    return (
        <div className={styles.movie}>
            <Image onClick={onClick} width={150} height={270} src={poster_path} alt={title}/>
            <Link prefetch href={`movies/${id}`}>
                {title}
            </Link>
        </div>

    )
}