

export default function Figure({ imageURL, caption}) {
    return (
        <figure>
            <img src={imageURL} />
            <figcaption>Awesome pic taken on {caption}</figcaption>
        </figure>
    )
}