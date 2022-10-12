import axios from 'axios';
import { useState } from 'react';

function SignUp(){

    const [ state, setState ] = useState({ username: '', password: '' })

    function updateState(event){
        setState({...state, [event.target.name]: event.target.value}) 
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:3001/signup', state)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1 className='log-sign-h1'>Create an Account</h1>
            <form className='log-sign-form' onSubmit={handleSubmit}>

                <label>Username:</label>
                <input 
                name='username' 
                value={state.username} 
                onChange={updateState} 
                type="text"/>

                <label>Password:</label>
                <input 
                name='password' 
                value={state.password} 
                onChange={updateState} 
                type="password" />

                <button className='log-sign-btn' type="submit">Create</button>
            </form>
        </div>
    )
}

export default SignUp;