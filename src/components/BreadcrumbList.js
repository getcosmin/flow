import { Link } from 'react-router-dom';

export default function BreadcrumbList({ content }) {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumb-list">
            <li><Link to="/" className="breadcrumb-link">Flow</Link></li>
            { content.url01 
                ? <li><Link to={content.url01} className="breadcrumb-link">{content.path01}</Link></li>
                : <li> {content.path01} </li>
            }
            { content.path02 
                ? <li>{content.path02}</li>
                : null }
            </ul>
        </div>
    );
}
