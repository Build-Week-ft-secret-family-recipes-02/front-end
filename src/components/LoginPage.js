import React, { useState } from "react";
import "../styles/LoginPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [error, setError] = useState(false);
    const [form, setForm] = useState({username: "",password: ""});
    

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-top">
                    <div className="icon"></div>
                    <br />
                    <span className="welcome-message">Welcome Chef!</span>
                </div>
                <div className="login-bottom">
                    <form className="login-form">
                        <div className="input-group">
                            <input 
                            type="text"
                            name="username"
                            autoComplete="off"
                            className="input-field"
                            placeholder="Username"
                            />
                            <label className="input-label"><span>Username</span></label>
                        </div>
                        <div className="input-group">
                            <input 
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Password"
                            />
                            <label className="input-label"><span>Password</span></label>
                            {error && <span>*Your username or password is incorrect</span>}
                            <br />
                            <br />
                            <span>Not a member? <Link to="/signup">Sign Up</Link></span>
                        </div>
                            <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;