import HeadlineSmall from '../../services/components/HeadlineSmall';
import DashboardView from '../../services/dashboard/DashboardView';
import useLocalStorage from '../../hooks/useLocalStorage';
import SoftwareGUI from '../../services/components/SoftwareGUI';

export default function DashboardMainView() {
    useLocalStorage('tasks', [
        {
            id: '001',
            category: 'Marketing',
            title: 'Social Media Campaign',
            description: 'Prepare materials and plan budget for the campaign.',
            priority: 'High',
            state: true,
            endDate: '11/11/2099',
        },
        {
            id: '002',
            category: 'Human Resources',
            title: 'Christmas Bonus',
            description: 'Calculate bonus for each employee before the end of the month.',
            priority: 'Normal',
            state: false,
            endDate: '11/11/2099',
        },
    ]);


    return (
        <SoftwareGUI>
            <HeadlineSmall title='Dashboard' />
            <DashboardView />
        </SoftwareGUI>
    );
}
