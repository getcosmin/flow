import DashboardCard from './components/DashboardCard';

export default function DashboardView() {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <DashboardCard
                    content={{
                        kpi: 6,
                        text: 'Remaining Tasks',
                    }}
                />
                <DashboardCard
                    content={{
                        kpi: 6,
                        text: 'Remaining Tasks',
                    }}
                />
                <DashboardCard
                    content={{
                        kpi: 6,
                        text: 'Remaining Tasks',
                    }}
                />
                <DashboardCard
                    content={{
                        kpi: 6,
                        text: 'Remaining Tasks',
                    }}
                />
            </div>
        </div>
    );
}
