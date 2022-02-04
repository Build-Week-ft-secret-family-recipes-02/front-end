import React, { useContext, useEffect } from "react";
import AllRecipesContext from "../context/AllRecipes";
import { Redirect } from "react-router";
import { useHistory } from "react-router";

const Logout = () => {
    const { push } = useHistory();
    const { setIsLoggedIn, isLoggedIn } = useContext(AllRecipesContext)

    useEffect(() => {
        setIsLoggedIn({...isLoggedIn, username: "", loggedIn: false})
        localStorage.removeItem('token')
        push('/login')
        console.log('working')
    }, [])

    return (
        <div></div>
    )
}

export default Logout;