import './Auth.module.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit=(e) =>{
        e.preventDefault();
    }

    useEffect(() => {
        console.log('useeffect')
        axios('https://my.api.org/Account/Login',
        )
    );

    console.log(email, password)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Auth;