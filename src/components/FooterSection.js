import { Link } from 'react-router-dom';

export default function FooterSection({ content }) {
    if (content === undefined) return;

    return (
        <div className="footer-section">
            <p>{content.title}</p>
            <ul className="footer-group list-none">
                { content.links !== undefined ?
                    content.links.map((item) => {
                    return <li key={item.id}>
                                <Link className="footer-nav-link"
                                      to={item.url}
                                >
                                    {item.link}
                                </Link>
                            </li>;
                    })
                    : null
                }
            </ul>
        </div>
    );
}
