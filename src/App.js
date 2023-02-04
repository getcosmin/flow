import { Route, Routes } from 'react-router-dom';

import IndexView from './views/IndexView';
import AccountLoginView from './views/AccountLoginView';
import SoftwareMainView from './views/private/SoftwareMainView';
import TaskManagerView from './views/private/TaskManagerView';

import NavigationMain from './components/NavigationMain';
import Footer from './components/Footer';

import './assets/css/workstation.css';

function App() {
  return (
    <>
      <NavigationMain />
      <Routes>
        <Route
          path="/"
          element= {<IndexView />}
        />

        <Route
          path="/login"
          element= {<AccountLoginView />}
        />

        <Route
          path="/software"
          element= {<SoftwareMainView />}
        />

        <Route
          path="/software/tasks"
          element= {<TaskManagerView />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
