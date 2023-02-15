export default function TaskManagerRowMobile({ content }) {
    return (
        <div className="table-row" role="row">
            <div role="cell">{content.id}</div>
            <div role="cell">{content.title}</div>
        </div>
    );
}
