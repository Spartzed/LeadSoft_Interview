import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import './styles.css';

const LoginPage = () => {

    const {login } = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const submit = (e) =>{
      e.preventDefault();
      login(email, password);

    }
    return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={submit}>
              <span className="login-form-title">Bem Vindo</span><br></br>
  
              <div className="wrap-input">
                <input className={email !== "" ? 'has-val input': 'input'} type="email"
                value = {email}
                onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
  
              <div className="wrap-input">
                <input className={password !== "" ? 'has-val input': 'input'} type="password"
                  value = {password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>
              
              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    );
}

export default LoginPage