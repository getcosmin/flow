export default function FeatureItem({ content }) {
    console.log(content)
    return content ? (
        <div className="feature-box">
            <header>
                <svg width="24" height="24" viewBox="0 0 48 48">
                    {content?.img}
                </svg>
                <h3>{content?.title}</h3>
                <p>{content?.description}</p>
            </header>
        </div>
    )
    : null;
}
