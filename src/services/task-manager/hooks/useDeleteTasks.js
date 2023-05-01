import { useState } from 'react';

export default function useDeleteTasks(event) {
    const [tasksList, setTasksList] = useState([]);

    function deleteTask(event) {
        if (event) {
            const selectTargetTask = event.target.closest('.mobile-card').id;
            const storageTaskList = JSON.parse(localStorage.getItem('tasks'));

            const newTaskArray = storageTaskList.filter((task) => task.id !== selectTargetTask);
            setTasksList([...newTaskArray])
            console.log(tasksList)
            const newTasksList = JSON.stringify(newTaskArray);
            localStorage.setItem('tasks', newTasksList);
        }
    }

    return {
        deleteTask: deleteTask,
    };
}
