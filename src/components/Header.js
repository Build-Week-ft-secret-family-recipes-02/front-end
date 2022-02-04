import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"
import AllRecipesContext from "../context/AllRecipes";

const Header = () => {
    const { isLoggedIn} = useContext(AllRecipesContext)

    return (
        <div className="header">
            <div className="userInfo">
                <p>{isLoggedIn.username}</p>
            </div>
            <nav>
                <div className="links">
                    {!isLoggedIn.loggedIn && <Link to="/login">Login</Link>}
                    {isLoggedIn.loggedIn && <Link to="/logout">Logout</Link>}
                    {isLoggedIn.loggedIn && <Link to="/dashboard">Dashboard</Link>}
                </div>
            </nav>
            
        </div>
    )
}

export default Header;