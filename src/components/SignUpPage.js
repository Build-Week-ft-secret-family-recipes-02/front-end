import React from "react";
import "../styles/SignUpPage.css"

const SignUpPage = () => {
    return (
        <div className="signup-page-container">
            <div className="signup-box">
                <div className="signup-top">
                    
                </div>
                <div className="signup-bottom">
                    <form className="signup-form">
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
                         </div>
                         <div className="input-group">
                            <input 
                            type="text"
                            name="username"
                            autoComplete="off"
                            className="input-field"
                            placeholder="Username"
                            />
                            <label className="input-label"><span>Confirm Password</span></label>

                            <button>Create Account</button>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;