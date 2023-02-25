export default function HeadlineLarge({ content }) {
    console.log(content)
    if (!content) return;
    const { title, subtitle } = content;
    return (
        <header className="headline">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </header>
    );
}
