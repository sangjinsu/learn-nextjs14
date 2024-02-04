import { env } from 'node:process';
import {IVideo} from "@/interfaces/video";
import Link from "next/link";

async function fetchVideos (id: string): Promise<IVideo[]> {
    const response = await fetch(`${env.API_URL}/${id}/videos`);
    return await response.json();
}

export default async function MovieVideos({id}: {id: string}) {

    const videos = await fetchVideos(id);


    return (
        <div>
            <h1>Videos</h1>
            <ul>
                {videos.map((video: any) => (
                    <li key={video.id}>
                        <Link href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank">{video.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}