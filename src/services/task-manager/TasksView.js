// 01 - IMPORTING - React
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useFetch from '../../hooks/useFetch';

// 02 - IMPORTING - COMPONENTS
import NavigationSideMenu from '../../components/NavigationSideMenu';
import TaskManagerTable from './components/TaskManagerTable';
import NavigationTaskManager from './components/TaskManagerInterface';
import CreateTaskView from './components/CreateTaskView';
import HeadlineSmall from '../components/HeadlineSmall';


export default function TaskManagerMainView() {
    const [hasCreateTaskView, setCreateTaskView] = useState(false);
    const [viewTasks, setViewTasks] = useState([]);

    function toggleCreateTaskModal() {
        console.log('Create Task');
        hasCreateTaskView ? setCreateTaskView(false) : setCreateTaskView(true);
        console.log(hasCreateTaskView);
        document.body.classList.toggle('disable-scroll');
    }

        const tasksData = useFetch('/task-manager/view-tasks');

        useEffect(() => {
            setViewTasks(tasksData);
        }, [tasksData]);


    return (
        <>
        <section className="workview">
            <NavigationSideMenu />
            <div className="wrapper-view fill-width">
                <NavigationTaskManager
                    toggleCreateTaskModal={toggleCreateTaskModal}
                 />
                <HeadlineSmall title='View Tasks' />
                <TaskManagerTable {...viewTasks} />
            </div>
        </section>

        { hasCreateTaskView && createPortal(
            <CreateTaskView
                toggleCreateTaskModal={toggleCreateTaskModal}
            />,
            document.body)
        }

         </>
    );
}
