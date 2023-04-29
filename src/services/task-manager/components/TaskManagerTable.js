import TaskManagerTableRow from './elements/TaskManagerTableRow';
import TaskManagerTableHeader from './elements/TaskManagerTableHeader';
import MobileCardTask from './MobileCardTask';

export default function TaskManagerTable({ dataTasks }) {
    return (
        <div role="table">
            { window.innerWidth > 1024 ?
                <TaskManagerTableHeader />
                : null
            }
            { dataTasks ?
                window.innerWidth > 1024 ?
                    dataTasks.map((task) => {
                        return (
                            <TaskManagerTableRow
                                key={task.id}
                                task={{...task}}
                            />
                        );
                    })
                    :
                    dataTasks.map((task) => {
                        return (
                            <MobileCardTask
                                key={task.id}
                                task={{...task}}
                            />
                        );
                    })
                    : <p>No data from the Server.</p>
        }
    </div>
    );
}
