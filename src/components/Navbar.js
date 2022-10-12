import { Link } from 'react-router-dom';
import golfImage from '../images/golf-logo4.png';
import github from '../images/github-logo.png';
import linkedin from '../images/linked-in.png';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


const Navbar = () => {
    const { 
        isLoggedIn,
        user,
        logOutUser   
      } = useContext(AuthContext);

    return(
    <div className='nav'>
        <Link to='/'><img className='golf-logo' src={golfImage}/></Link>
        {isLoggedIn && (
        <div className='pro-log-div'>
          <Link to="/profile">
            <button className='signup'>Profile</button>
          </Link>
          <button className='logout-hidden' onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </div>
      )}
      {!isLoggedIn && (
        <div className='sign-log'>
          <Link className='signup' to='/signup'>SignUp</Link>
          <Link className='login' to='/login'>Login</Link>
        </div>
    )}
        <div className='a-tags'>
            <a href='https://github.com/LukaG7' target='_blank'><img className='git-linked-img' src={github}/></a>
            <a href='https://www.linkedin.com/in/lukas-gonzalez-a370b6251/' target='_blank'><img className='git-linked-img' src={linkedin}/></a>
        </div>
      </div>)
}


export default Navbar;