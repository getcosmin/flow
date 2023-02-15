import TaskManagerTableRow from './elements/TaskManagerTableRow';
import TaskManagerTableHeader from './elements/TaskManagerTableHeader';
import TaskManagerTableHeaderMobile from './elements/TaskManagerTableHeaderMobile';
import TaskManagerTableRowMobile from './elements/TaskManagerTableRowMobile';

export default function TaskManagerTable({ viewTasks }) {
    return (
        <div role="table">
            <TaskManagerTableHeader />
            { viewTasks ?
                viewTasks.map((task) => {
                    <TaskManagerTableRow
                        key={task.id}
                        content={{...task}}
                    />;
                })
                : <p>There is no data to display from the SERVER.</p>
            }
    </div>
    );
}
