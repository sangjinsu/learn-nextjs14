"use client";

export default function Error({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>{error.stack}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}