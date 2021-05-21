import React, { useState, useEffect, } from "react";
import { createBrowserHistory } from 'history';
import { useHistory, Router, Route } from 'react-router';


const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const onSubmit = () => {
        console.log("eeqwe")
        if (email === 'vvv@mail.ru' && password === '1234') {
            return (
                history.push('/table')
            );
        }
    }

    console.log(email, password)
    return (
        <div>
            {/* <NavLink to ="/auth"> */}
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" >Submit</button>
            </form>
            {/* </NavLink> */}
        </div>
    );
}
export default Auth;