

export default function VideoPlayer({ videoFile }) {

    return (
        <iframe
            width="100%" height="400px" src={videoFile.url}
            title={videoFile.title} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
}
