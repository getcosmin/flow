export default function DesktopTaskTableRow({ task }) {
    return (
        <div className="table-row" role="row">
            <div role="cell">{task.id}</div>
            <div role="cell">{task.category}</div>
            <div role="cell">{task.title}</div>
            <div role="cell">{task.description}</div>
            <div role="cell">{task.priority}</div>
            <div role="cell">Pending</div>
            <div role="cell">20.01.2023</div>
            <div role="cell">
                {task.end_date?.substring(0, 10)}
            </div>
        </div>
    );
}
