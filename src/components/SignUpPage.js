import React, { useState } from "react";
import "../styles/SignUpPage.css";
import axios from "axios";


const SignUpPage = () => {
    const [error, setError] = useState(false);
    const [confirmPW, setConfirmPW] = useState({password: ""});
    const [form, setForm] = useState({username: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(confirmPW.password !== form.password) return
        axios
        .post('https://bloomtechrecipebook.herokuapp.com/api/users', form)
        .then(resp => {setError(false)})
        .catch(err => console.log(err))
        .finally(setForm({username: "", password:""}));
        setError(true);
    }

    const onChange = (e) => {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    const confirmPasswordOnChange = (e) => {
        e.preventDefault();
        setConfirmPW({...confirmPW, [e.target.name]:e.target.value});
    }
    
    return (
        <div className="signup-page-container">
            <div className="signup-box">
                <div className="signup-top">
                    
                </div>
                <div className="signup-bottom">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                            type="text"
                            name="username"
                            className="input-field"
                            placeholder="Username"
                            value={form.username}
                            onChange={onChange}
                            />
                            <label className="input-label"><span>Username</span></label>
                        </div>
                        <div className="input-group">
                            <input 
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Password"
                            value={confirmPW.password}
                            onChange={confirmPasswordOnChange}
                            />
                            <label className="input-label"><span>Password</span></label>
                         </div>
                         <div className="input-group">
                            <input 
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Confirm Password"
                            value={form.password}
                            onChange={onChange}
                            />
                            <label className="input-label"><span>Confirm Password</span></label>
                            {error && <span>*Your passwords do not match</span>}
                            <button>Create Account</button>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;