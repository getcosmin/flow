import { Link } from 'react-router-dom';

export default function NavigationSide() {
    return (
        <nav className="workstation-side-menu">
            <div className="workstation-ui">
                <h2 className="workstation-title">Management</h2>
                <Link to="/software/tasks" className="workstation-side-button" href="/task-manager">
                    <svg className="workstation-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h6V5H5v14Zm8 0h6v-7h-6Zm0-9h6V5h-6Z"/>
                    </svg>
                    <span className="workstations-link">Task Manager</span>
                </Link>
            </div>
        </nav>
    );
}
