import { createContext } from 'react';
import { useEffect, useState } from 'react';
import useWindowToggle from '../hooks/useWindowToggle';

export const TaskManagerGlobalStateContext = createContext();

export const TaskManagerContext = ({ children }) => {
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
        <TaskManagerGlobalStateContext.Provider
            value={{
                toggleCreateTaskWindow: toggleCreateTaskWindow,
                hasCreateTaskView: hasCreateTaskView,
                tasksList: tasksList,
                viewTasks: viewTasks,
                deleteTask: deleteTask,
            }}
        >
            {children}
        </TaskManagerGlobalStateContext.Provider>
    );
};
