import HeadlineSmall from '../../components/HeadlineSmall';
import TaskManagerTable from './TaskManagerTable';

export default function TaskManagerDataView({ dataTasks }) {
    return (
        <div className="wrapper-view fill-width">
            <HeadlineSmall title='View Tasks' />
            <TaskManagerTable
                dataTasks={[...dataTasks]}
            />
        </div>
    );
}
