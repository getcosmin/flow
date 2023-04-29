// 01 - IMPORTING - React

// 02 - IMPORTING - CUSTOM HOOKS

// 03 - IMPORTING - COMPONENTS
import TaskManagerUserInterface from './components/TaskManagerUserInterface';
import TaskManagerDataView from './components/TaskManagerDataView';
import SoftwareGUI from '../components/SoftwareGUI';

export default function TaskManagerSoftware(props) {
    return (
        <>
        <SoftwareGUI>
            <TaskManagerUserInterface />
            <TaskManagerDataView />
        </SoftwareGUI>
         </>
    );
}
