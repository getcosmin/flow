export default function FeatureItem({ content }) {
    return content ? (
        <div className="feature-box">
            <header>
                <img className="feature-icon" src={content?.img} width="32" height="32"/>
                <h3>{content?.title}</h3>
                <p>{content?.description}</p>
            </header>
        </div>
    )
    : null;
}
