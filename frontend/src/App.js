import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHome from './components/DashboardHome';
import Events from './components/Events';
import Forum from './components/Forum';
import MySchedule from './components/MySchedule';
import ScheduleList from './components/ScheduleList';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="schedulelist" element={<ScheduleList />} />
            <Route path="myschedule" element={<MySchedule />} />
            <Route path="forum" element={<Forum />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
