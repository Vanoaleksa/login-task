import './Auth.module.css';


const Auth = () => {
    let a = document.querySelector('username');
    console.log(a);
    return (
        <div className='login'>
            <label>Login</label>
            <input  type='text' name='username'  />
            <label>Password</label>
            <input type='text' name='password'  />
            <button type="submit">Sign In</button>
        </div>
    );
}
export default Auth;