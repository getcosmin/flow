import HeadlineSmall from '../../components/HeadlineSmall';
import TaskManagerTable from './TaskManagerTable';
import { useContext } from 'react';
import { TaskManagerGlobalStateContext } from '../global-state/TaskManagerGlobalStateContext';

export default function TaskManagerDataView(props) {
    console.count('TaskManagerDataView Rendered: ');
    return (
        <div className="wrapper-view fill-width">
            <HeadlineSmall title='View Tasks' />
            <TaskManagerTable />
        </div>
    );
}
