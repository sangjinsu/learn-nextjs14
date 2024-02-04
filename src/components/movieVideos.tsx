import {env} from 'node:process';
import {IVideo} from "@/interfaces/video";
import styles from "../styles/movieVideos.module.css";

async function fetchVideos(id: string): Promise<IVideo[]> {
    const response = await fetch(`${env.API_URL}/${id}/videos`);
    return await response.json();
}

export default async function MovieVideos({id}: { id: string }) {

    const videos = await fetchVideos(id);

    return (
        <div className={styles.container}>
            {videos.map((video: any) => (
                <div key={video.id}>
                    <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allow={
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        }
                        allowFullScreen
                        title={video.name}
                    />
                </div>
            ))}
        </div>
    );
}