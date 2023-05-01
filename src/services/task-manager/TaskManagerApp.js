// 01 - IMPORTING - React

// 02 - IMPORTING - CUSTOM HOOKS

// 03 - IMPORTING - COMPONENTS
import TaskManagerController from './components/TaskManagerController';
import TaskManagerDataView from './components/TaskManagerDataView';
import SoftwareGUI from '../components/SoftwareGUI';

export default function TaskManagerApp(props) {
    return (
        <>
        <SoftwareGUI>
            <TaskManagerController />
            <TaskManagerDataView />
        </SoftwareGUI>
        </>
    );
}
