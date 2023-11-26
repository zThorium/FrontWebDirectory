import './Login.css'
import React, { useState } from 'react';
import Home from './Home/Home';


const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handdleLogin = (e) => {   
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }; 
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
            
                if (result.token){
                    
                    localStorage.setItem('token',result.token)
                    setLoginSuccessful(true);
                } else {
                    console.log('Error de Usuario/Contraseña')
                    setLoginSuccessful(false);
                }
                
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    return (
        <>{loginSuccessful ? <Home />:
        <div className='custom-form'>
            <form>
                <label className='custom-Label'>Username:</label>
                <input onChange={(event)=>{setUsername(event.target.value)}} 
                placeholder='username' 
                className='custom-Input' 
                type="text"/>
                <label className='custom-Label'>Password:</label>
                <input onChange={(event)=>{setPassword(event.target.value)}} 
                placeholder='password' 
                className='custom-Input' 
                type="password"/>
                <button className='custom-button' onClick={handdleLogin}>Login</button>
            </form>
        </div>
        }</>
    )
}

export default Login;
