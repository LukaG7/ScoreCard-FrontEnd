import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
 
// const API_URL = "http://localhost:3001";
 
 
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext)
  
  const navigate = useNavigate();
 
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };
 
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken)
        authenticateUser();
        navigate('/profile');   
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
};
  return (
      
    <div className="LoginPage">
      <h1 className="log-sign-h1">Login To Your Account</h1>
 
      <form className="log-sign-form" onSubmit={handleLoginSubmit}>
        <label>Username:</label>
        <input 
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />
 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <button className="log-sign-btn" type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
    </div>
    )
}
 
export default Login;