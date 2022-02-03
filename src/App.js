import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";
import Recipe from "./components/Recipe";
import AddNewRecipes from "./components/AddNewRecipes";
import EditRecipe from "./components/EditRecipe";
import AllRecipesContext from "./context/AllRecipes";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    console.log(allRecipes);
  }, [allRecipes])


  return (
    <div className="App">
      <AllRecipesContext.Provider value={{allRecipes, setAllRecipes}}>
        <div className="header">
          <Link to="/signup">Sign Up</Link>
        </div>
        <Switch>
          <Route path="/dashboard/edit/:id">
            <EditRecipe />
          </Route>
          <Route path="/dashboard/:id">
            <Recipe />
          </Route>
          <Route path="/new">
            <AddNewRecipes />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </AllRecipesContext.Provider>
    </div>
  );
}

export default App;
