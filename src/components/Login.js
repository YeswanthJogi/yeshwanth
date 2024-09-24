import './login.css';
import React from "react";
import { useState } from "react";
function Login() {
    const [Name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [rememberMe, setRememberMe] = useState('');

  
    return (
      <>
        <div className="border">
          <h2 className="text-primary text-center">Login Form</h2>
  
          <div>
            <label className="name">User name*</label><br />
            <input type="text" className="formcontrol" value={Name}
              onChange={(e) => { setname(e.target.value); }} />
          </div>
  
        
  
          <div>
            <label className='mail'>Email*</label><br />
            <input type="email" className="formcontrol" value={email}
              onChange={(e) => { setEmail(e.target.value); }} />
          </div>
  
          <div>
            <label className='pass'>Password*</label><br />
            <input type="password" className="formcontrol" value={password}
              onChange={(e) => { setpassword(e.target.value); }} />
          </div>
          <div>
          <input 
            type="checkbox" 
            checked={rememberMe} 
            onChange={(e) => setRememberMe(e.target.checked)} 
          />
          <label className='remember'>Remember Me</label>
        </div>
          <div className='forgot'>
           Lost Your Password?Click Here!
          </div>
          <div>
            <button onClick={() => {
              console.log("name:", Name);
              console.log("email:", email);
              console.log("password:", password);
            }}>Login</button>
          </div>
          <div>
            <button onClick={() => {
              console.log("name:", Name);
              console.log("email:", email);
              console.log("password:", password);
            }}>Signup</button>
          </div>
          <div>
            <button onClick={() => {
              console.log("name:", Name);
              console.log("email:", email);
              console.log("password:", password);
            }}>Create Account</button>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;