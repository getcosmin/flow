import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/task-manager/Dashboard';
import Tasks from './pages/task-manager/Tasks';

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
              element= {<Tasks />}
            />
          </Routes>
      </PortalSoftwareWrapper>
    </>
  );
}

export default App;
