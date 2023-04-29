export default function DashboardCard({ content }) {
    return (
        <div className="dashboard-card">
            <p className="dashboard-kpi">{content.kpi}</p>
            <p>{content.text}</p>
        </div>
    );
}