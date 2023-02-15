import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BreadcrumbList({ content }) {
    const [breadcrumbs, setBreadcrumbs] = useState();

    useEffect(() => {
        function toUpperCase(word) {
            return word[0].toUpperCase() + word.slice(1);
        }
        const path = window.location.pathname.split('/').filter((word) => word.length > 2);
        const breadcrumbArray = path.map((word) => {
            const temp = toUpperCase(word);
            return temp;
        });
        setBreadcrumbs(breadcrumbArray);
    }, []);

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumb-list">
                <li><Link to="/" className="breadcrumb-link">Flow</Link></li>
                { breadcrumbs ?
                    breadcrumbs.map((breadcrumb) => {
                    return <li> {breadcrumb} </li>
                    })
                    : null
                }
            </ul>
        </div>
    );
}
