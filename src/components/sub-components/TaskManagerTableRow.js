export default function TaskManagerRow({ content }) {
    return (
        <div className="table-row" role="row">
            <div role="cell">{content.id}</div>
            <div role="cell">{content.category}</div>
            <div role="cell">{content.title}</div>
            <div role="cell">{content.description}</div>
            <div role="cell">{content.priority}</div>
            <div role="cell">Pending</div>
            <div role="cell">20.01.2023</div>
            <div role="cell">
                {content.end_date?.substring(0, 10)}
            </div>
        </div>
    );
}
