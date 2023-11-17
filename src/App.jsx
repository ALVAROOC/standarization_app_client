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
import EditTask from './features/tasks/EditTask';
import FlowTest from './features/kanban/FlowTest';
import FlowTest2 from './features/kanban/FlowTest2';
import FlowTest3 from './features/kanban/FlowTest3';
import FlowTest4 from './features/kanban/FlowTest4';
import FlowTest5 from './features/kanban/FlowTest5';
import FlowTest6 from './features/kanban/FlowTest6';
import Prefetch from './features/auth/Prefetch';
import Incidents from './features/dashboard/serviceManagement/incidents/Incidents';
import ArticlesList from './features/knowledgeBase/ArticlesList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route element={<Prefetch> </Prefetch>}>
          <Route path='dash' element={<DashLayout />} >{/* PROTECTED ROUTES */}
            
            <Route index element={<Welcome />} />



            <Route path='incidents'>
              <Route index element={<Incidents />} />
              {/* <Route path=':id' element={<EditUser />} />
              <Route path='new' element={<NewUserForm />} /> */}
              {/* <Route path=':taskId' element={<div>Task</div>} /> */}
            </Route>

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

            <Route path='kanban'>
              <Route path='f1' element={<FlowTest />} />
              <Route path='f2' element={<FlowTest2 />} />
              <Route  index element={<FlowTest3 />} />
              <Route  path='f4' element={<FlowTest4 />} />
              <Route  path='f5' element={<FlowTest5 />} />
              <Route  path='f6' element={<FlowTest6 />} />

            </Route>


            <Route path='articles'>
              <Route  index element={<ArticlesList />} />


            </Route>

          </Route>{/* END DASH */}
        </Route>{/* END PREFETCH */}
      </Route>
    </Routes>
  )
}

export default App
