// 01 - IMPORTING - React
import { createPortal } from 'react-dom';

// 02 - IMPORTING - CUSTOM HOOKS
import useFetchTasks from './hooks/useFetchTasks';
import useWindowToggle from './hooks/useWindowToggle';

// 03 - IMPORTING - COMPONENTS
import TaskManagerController from './components/TaskManagerController';
import CreateTaskView from './components/CreateTaskView';
import TaskManagerDataView from './components/TaskManagerDataView';


export default function TaskManagerMainView(props) {
    const {hasCreateTaskView, toggleCreateTaskWindow} = useWindowToggle();

    const {dataTasks} = useFetchTasks();

    return (
        <>
        <section className="workview fill-width">
            <TaskManagerController
                toggleCreateTaskWindow={toggleCreateTaskWindow}
            />
            <TaskManagerDataView
                dataTasks={dataTasks}
            />
        </section>

        { hasCreateTaskView && createPortal(
            <CreateTaskView
                toggleCreateTaskWindow={toggleCreateTaskWindow}
            />,
            document.body)
        }

         </>
    );
}
