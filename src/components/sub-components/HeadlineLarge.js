export default function HeadlineLarge({ content }) {
    return (
        <header className="headline">
            <h2>{content.title}</h2>
            <p>{content.subtitle}</p>
        </header>
    );
}
