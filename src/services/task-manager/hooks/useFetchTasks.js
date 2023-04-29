import { useState, useEffect } from 'react';

export default function useFetchTasks() {
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
