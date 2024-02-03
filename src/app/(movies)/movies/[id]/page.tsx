export const metadata = {
    title: "Movie",
};


export default function Page({params: {id}}) {

    return (
        <div>
            <h1>Movie {id}</h1>
        </div>
    );
}