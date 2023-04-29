import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/task-manager/Dashboard';
import TaskManagerSoftware from './services/task-manager/TaskManagerSoftware';

import NavigationMain from './components/NavigationMain';

import './assets/css/workstation.css';
import PortalNavigationMenu from './components/PortalMenuNavigation';
import PortalSoftwareWrapper from './components/PortalSoftwareWrapper';

function App() {
  return (
    <>
      <NavigationMain />
      <PortalSoftwareWrapper>
        <PortalNavigationMenu />
          <Routes>
            <Route
              path="/"
              element= {<Dashboard />}
            />
            <Route
              path="/tasks"
              element= {<TaskManagerSoftware />}
            />
          </Routes>
      </PortalSoftwareWrapper>
    </>
  );
}

export default App;
