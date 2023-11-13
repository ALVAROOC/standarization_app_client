import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import UsersList from './features/users/UsersList';
import TasksList from './features/tasks/TasksList';
import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';
import NewTask from './features/tasks/NewTask';
import EditTask from './features/tasks/NewTask';
import FlowTest from './features/sites/FlowTest';
import Prefetch from './features/auth/Prefetch';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route element={<Prefetch> </Prefetch>}>
          <Route path='dash' element={<DashLayout />} >{/* PROTECTED ROUTES */}
            
            <Route index element={<Welcome />} />

            <Route path='users'>
              <Route index element={<UsersList />} />
              <Route path=':id' element={<EditUser />} />
              <Route path='new' element={<NewUserForm />} />
              {/* <Route path=':taskId' element={<div>Task</div>} /> */}
            </Route>

            <Route path='tasks'>
              <Route index element={<TasksList />} />
              <Route path=':id' element={<EditTask />} />
              <Route path='new' element={<NewTask />} />
              {/* <Route path=':taskId' element={<div>Task</div>} /> */}
            </Route>

            <Route path='sites'>
              <Route index element={<FlowTest />} />
              {/* <Route index element={<SitesList />} />
              <Route path=':id' element={<EditSite />} />
              <Route path='new' element={<NewSite />} /> */}
              {/* <Route path=':siteId' element={<div>Site</div>} /> */}
            </Route>

          </Route>{/* END DASH */}
        </Route>{/* END PREFETCH */}
      </Route>
    </Routes>
  )
}

export default App
