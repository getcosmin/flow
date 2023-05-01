import { useState, useEffect } from 'react';

export default function useFetchTasks() {
    console.log(hasCreateTaskView)
    const [viewTasks, setViewTasks] = useState([]);

    useEffect(async () => {
        const response = localStorage.getItem('tasks');
        const parsedResponse = await JSON.parse(response);
        setViewTasks([...parsedResponse]);
    }, []);
    return {
        dataTasks: viewTasks,
    };
}
