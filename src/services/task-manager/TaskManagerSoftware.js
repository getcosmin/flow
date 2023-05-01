import { TaskManagerContext } from './global-state/TaskManagerGlobalStateContext';
import TaskManagerApp from './TaskManagerApp';
export default function TaskManagerSoftware(props) {
    return (
        <TaskManagerContext>
           <TaskManagerApp />
        </TaskManagerContext>
    );
}
