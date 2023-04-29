import { createPortal } from 'react-dom';
import useWindowToggle from '../hooks/useWindowToggle';
import TaskManagerController from './TaskManagerController';
import CreateTaskView from '../modals/CreateTaskView';

export default function TaskManagerUserInterface() {
    const {hasCreateTaskView, toggleCreateTaskWindow} = useWindowToggle();

    return (
        <>
            <TaskManagerController
                toggleCreateTaskWindow={toggleCreateTaskWindow}
            />
            { hasCreateTaskView && createPortal(
                <CreateTaskView
                    toggleCreateTaskWindow={toggleCreateTaskWindow}
                />,
            document.body)
        }
        </>
    );
}
