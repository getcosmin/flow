import dbDashboardGraph from "../../../assets/db/dbDashboardGraph";

export default function DashboardCardLandscape({ content }) {

    return (
        <div className="dashboard-card card-landscape dashboard-figure">
            { dbDashboardGraph.map((line) => {
                return(
                    <div className="dashboard-progress" style={{'--height': `${line.progress}px`}}></div>
                );
            })
            }
        </div>
    );
}
