import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

    const [ state, setState ] = useState({ username: '', password: '' })

    function updateState(event){
        setState({...state, [event.target.name]: event.target.value}) 
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:3001/login', state)
        .then(res => {
            console.log(res.navigate)
            navigate('/profile')
        })
        .catch(err => console.log(err))
    }

    const navigate = useNavigate()

    return(
        <div>
            <h1 className='log-sign-h1'>Login To Your Account</h1>
            <form className='log-sign-form' onSubmit={handleSubmit}>
                <label>Username</label>
                <input name='username' value={state.username} onChange={updateState} type="text"/>
                <label>Password</label>
                <input name='password' value={state.password} onChange={updateState} type="password" />
                <button className='log-sign-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;