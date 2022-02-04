import React, { useState, useContext } from "react";
import "../styles/LoginPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import AllRecipesContext from "../context/AllRecipes";

const LoginPage = () => {
    const [error, setError] = useState(false);
    const [form, setForm] = useState({username: "",password: ""});
    const { push } = useHistory() 
    const { setIsLoggedIn, isLoggedIn } = useContext(AllRecipesContext)

    const onChange = (e) => { 
        setForm({ ...form, [e.target.name] : e.target.value})
        }

    const onFormSubmit = (e) => { 
        e.preventDefault() 
        axios
            .post("https://bloomtechrecipebook.herokuapp.com/api/users/login", form)
            .then(resp => {localStorage.setItem('token', resp.data.token); push('/dashboard'); })
            .catch(err => setError(true))
            .finally(
                setIsLoggedIn({...isLoggedIn, username: form.username, loggedIn: true}),
                setForm( {...form, username: "", password: "" } )
            )
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-top">
                    <div className="icon"></div>
                    <br />
                    <span className="welcome-message">Welcome Chef!</span>
                </div>
                <div className="login-bottom">
                    <form className="login-form" onSubmit={onFormSubmit}>
                        <div className="input-group">
                            <input 
                            type="text"
                            name="username"
                            autoComplete="off"
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
                            value={form.password}
                            onChange={onChange}
                            autoComplete="off"
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