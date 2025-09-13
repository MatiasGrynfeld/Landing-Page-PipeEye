export default function Link({ img, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={img} className="redes-page" />
        </a>
    );
}