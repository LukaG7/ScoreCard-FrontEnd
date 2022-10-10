import golfImage from './images/golf logo4.png';
import './App.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile'
import github from './images/github-logo.png';
import linkedin from './images/linked-in.png';

import { NavLink, Link, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="body">
      <nav className='nav'>
        <Link to='/'><img className='golf-logo' src={golfImage}/></Link>
        <div className='sign-log'>
          <Link className='signup' to='/signup'>SignUp</Link>
          <Link className='login' to='/login'>Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<Profile />}/> 
        <Route path='/' element={<HomePage />}/>
      </Routes>
      <div className='a-tags'>
        <a href='https://github.com/LukaG7' target='_blank'><img className='git-linked-img' src={github}/></a>
        <a href='https://www.linkedin.com/in/lukas-gonzalez-a370b6251/' target='_blank'><img className='git-linked-img' src={linkedin}/></a>
    </div>
    </div>
  );
}

export default App;
