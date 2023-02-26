export default function ModuleDisplayBody({ content }) {
    return (
        <div className="display-body">
            <header>
                <h2>{content?.title}</h2>
                <p>{content?.description}</p>
            </header>
            <picture>
                <img
                    className="display-image"
                    width="1380"
                    height="920"
                    src={content?.img}
                    alt={content?.alt}
                />
            </picture>
        </div>
    );
}