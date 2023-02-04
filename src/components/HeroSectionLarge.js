import { Link } from 'react-router-dom';

export default function HeroSectionLarge({ content }) {
    return (
        <section className="hero-large">
            <div className="wrapper">
                <header>
                    <h1>{content.title}</h1>
                    <p>{content.subtitle}</p>
                </header>
                <Link to="/software/tasks">
                    <div role="button" className="button-primary">{content.cta}</div>
                </Link>
            </div>
        </section>
    );
}
