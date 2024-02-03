"use client";

import type {Metadata} from "next";
import {useEffect, useState} from "react";

// export const metadata: Metadata = {
//     title: "Home",
// };

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const data = await response.json();
        setMovies(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {isLoading && <p>Loading...</p>}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
