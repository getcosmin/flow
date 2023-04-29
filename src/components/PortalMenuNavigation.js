// IMPORT - Components
import SoftwareButtonUI from './sub-components/SoftwareButtonUI';

// IMPORT - Icons
import iconDashboard from '../assets/img/icons/softwareUI/iconDashboard';
import iconViewTasks from '../assets/img/icons/softwareUI/iconViewTasks';

export default function PortalNavigationMenu() {

    if (window.innerWidth < 1024) return;

    return (
        <nav className="workstation-side-menu">
            <div className="workstation-ui">
                <h2 className="workstation-title">Activity</h2>
                <SoftwareButtonUI
                    cta="Dashboard"
                    url="/"
                    icon={iconDashboard}
                />
                <SoftwareButtonUI
                    cta="View Tasks"
                    url="/tasks"
                    icon={iconViewTasks}
                />
            </div>
        </nav>
    );
}
