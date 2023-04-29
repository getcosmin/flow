import HeadlineSmall from '../../components/HeadlineSmall';
import TaskManagerTable from './TaskManagerTable';
import useFetchTasks from '../hooks/useFetchTasks';

export default function TaskManagerDataView({ }) {
    const {dataTasks} = useFetchTasks();
    console.count('TaskManagerDataView Rendered: ');
    return (
        <div className="wrapper-view fill-width">
            <HeadlineSmall title='View Tasks' />
            <TaskManagerTable
                dataTasks={[...dataTasks]}
            />
        </div>
    );
}
