import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";
import Recipe from "./components/Recipe";
import AddNewRecipes from "./components/AddNewRecipes";
import EditRecipe from "./components/EditRecipe";
import AllRecipesContext from "./context/AllRecipes";
import Header from "./components/Header";
import Logout from "./components/Logout";
import PrivateRoute from "./util/PrivateRoute";


function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState({
    username: "",
    loggedIn: false
  })


  

  return (
    <div className="App">
      <AllRecipesContext.Provider value={{allRecipes, setAllRecipes, isLoggedIn, setIsLoggedIn}}>
        <Header />
        <Switch>
          <Route path="/dashboard/edit/:id">
            <EditRecipe />
          </Route>
          <Route path="/new">
            <AddNewRecipes />
          </Route>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/logout">
            <Logout/>
          </Route>
          <Route exact path="/">
            <LoginPage/>
          </Route>
        </Switch>
      </AllRecipesContext.Provider>
    </div>
  );
}

export default App;
