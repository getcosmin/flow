import LabelState from '../widgets/LabelState';

export default function TaskManagerRowMobile({ task }) {
    return (
        <div className="table-row" role="row">
            <div role="cell">{task.id}</div>
            <div role="cell">{task.title}</div>
            <LabelState state={{ done: task.state }}/>
        </div>
    );
}
