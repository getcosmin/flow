import DesktopTaskTableRow from './elements/DesktopTaskTableRow';
import DesktopTaskTableHeader from './elements/DesktopTaskTableHeader';
import MobileTaskCard from './elements/MobileTaskCard';
import { useContext, useEffect, useState } from 'react';
import { TaskManagerGlobalStateContext } from '../global-state/TaskManagerGlobalStateContext';

export default function TaskManagerTable() {
    const {viewTasks, deleteTask} = useContext(TaskManagerGlobalStateContext);
    return (
        <div role="table">
            { window.innerWidth > 1024 ?
                <DesktopTaskTableHeader />
                : null
            }
            { viewTasks ?
                window.innerWidth > 1024 ?
                    viewTasks.map((task) => {
                        return (
                            <DesktopTaskTableRow
                                key={task.id}
                                task={{...task}}
                            />
                        );
                    })
                    :
                    viewTasks.map((task) => {
                        return (
                            <MobileTaskCard
                                key={task.id}
                                task={{...task}}
                                deleteTask={deleteTask}
                            />
                        );
                    })
                    : <p>No data from the Server.</p>
        }
    </div>
    );
}
