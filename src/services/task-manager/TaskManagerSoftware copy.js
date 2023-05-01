// 01 - IMPORTING - React
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

// 02 - IMPORTING - CUSTOM HOOKS
import useWindowToggle from './hooks/useWindowToggle';

// 03 - IMPORTING - COMPONENTS
import TaskManagerController from './components/TaskManagerController';
import CreateTaskView from './modals/CreateTaskView';
import TaskManagerDataView from './components/TaskManagerDataView';
import SoftwareGUI from '../components/SoftwareGUI';

export default function TaskManagerSoftware(props) {
    const [tasksList, setTasksList] = useState([]);
    const {hasCreateTaskView, toggleCreateTaskWindow} = useWindowToggle();
    const [viewTasks, setViewTasks] = useState([]);

    useEffect(() => {
        const fetchTasksData = () => {
            const response = localStorage.getItem('tasks');
            const parsedResponse = JSON.parse(response);
            setViewTasks([...parsedResponse]);
        };
        fetchTasksData();
    }, [hasCreateTaskView || tasksList]);

    function deleteTask(event) {
        if (event) {
            const selectTargetTask = event.target.closest('.mobile-card').id;
            const storageTaskList = JSON.parse(localStorage.getItem('tasks'));

            const newTaskArray = storageTaskList.filter((task) => task.id !== selectTargetTask);
            setTasksList([...newTaskArray]);
            const newTasksList = JSON.stringify(newTaskArray);
            localStorage.setItem('tasks', newTasksList);
        }
    }

    return (
        <>
        <SoftwareGUI>
        <TaskManagerController
                toggleCreateTaskWindow={toggleCreateTaskWindow}
            />
            <TaskManagerDataView
                dataTasks={[...viewTasks]}
                deleteTask={deleteTask}
            />
        </SoftwareGUI>
        { hasCreateTaskView && createPortal(
                <CreateTaskView
                    toggleCreateTaskWindow={toggleCreateTaskWindow}
                />,
            document.body)
        }
         </>
    );
}
