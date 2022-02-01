import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";
import Recipe from "./components/Recipe";
import AddNewRecipes from "./components/AddNewRecipes";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
