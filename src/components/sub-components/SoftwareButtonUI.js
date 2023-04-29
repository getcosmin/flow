import { Link } from 'react-router-dom';

export default function SoftwareButtonUI({ cta, icon, url }) {
    return (
        <Link to={url} className="workstation-side-button" href="/task-manager">
            <svg className="workstation-icon" width="24" height="24" viewBox="0 96 960 960">
                {icon}
            </svg>
            <p className="workstations-link">{cta}</p>
        </Link>
    );
}