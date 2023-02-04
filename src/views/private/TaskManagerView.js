import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useFetch from '../../hooks/useFetch';

import BreadcrumbList from '../../components/BreadcrumbList';
import NavigationSide from '../../components/NavigationSide';
import TaskMangerTableHeader from '../../components/sub-components/TaskManagerTableHeader';
import TaskMangerTableHeaderMobile from '../../components/sub-components/TaskManagerTableHeaderMobile';
import TaskMangerTableRow from '../../components/sub-components/TaskManagerTableRow';
import TaskMangerTableRowMobile from '../../components/sub-components/TaskManagerTableRowMobile';
import NavigationTaskManager from '../../components/NavigationTaskManager';
import CreateTaskModalView from '../../components/modals/CreateTaskModalView';

export default function NebulaTaskManagerView() {
    const [hasCreateTaskView, setCreateTaskView] = useState(false);
    const [viewTasks, setViewTasks] = useState();

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
            <NavigationSide />
            <div className="wrapper-view fill-width">
            <NavigationTaskManager
                toggleCreateTaskModal = {toggleCreateTaskModal}
            />
            <header>
                <BreadcrumbList
                    content = {{
                        path01: 'Software',
                        url01: '/software',
                        path02: 'Task Manager',
                    }}
                />
                <h2>Welcome to WorkStation.</h2>
            </header>
                <div role="table">
                    { window.innerWidth > 1024
                        ? <TaskMangerTableHeader />
                        : <TaskMangerTableHeaderMobile />
                    }

                    { viewTasks && window.innerWidth > 1024 ?
                        viewTasks.map((task) => {
                            return (
                                <TaskMangerTableRow
                                    key={task.id}
                                    content={{...task}}
                                />
                            );
                        })
                        : viewTasks && window.innerWidth < 1024 ?
                        viewTasks.map((task) => {
                            return (
                                <TaskMangerTableRowMobile
                                    key={task.id}
                                    content={{...task}}
                                />
                            );
                        })
                        : <p>There is no data to display from the SERVER.</p>
                    }
                </div>
            </div>
        </section>

        {hasCreateTaskView && createPortal(
            <CreateTaskModalView
                toggleCreateTaskModal = {toggleCreateTaskModal}
            />,
            document.body)}
        </>
    );
}
