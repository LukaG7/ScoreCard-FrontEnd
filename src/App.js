import './App.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile'
import CreateCourse from './components/CreateCourse';
import Navbar from './components/Navbar';

import { NavLink, Link, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<Profile />}/> 
        <Route path='/' element={<HomePage />}/>
        <Route path='/createcourse' element={<CreateCourse />}/>
      </Routes>
    </div>
  );
}

export default App;
