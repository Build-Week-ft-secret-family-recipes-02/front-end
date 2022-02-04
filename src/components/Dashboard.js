import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Dashboard.css";
import EditRecipe from "./EditRecipe";
import AllRecipesContext from "../context/AllRecipes";
import axiosWithAuth from "../util/axiosWithAuth";
import Recipe from "./Recipe";

const Dashboard = () => {
  const { allRecipes, setAllRecipes } = useContext(AllRecipesContext)
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const { push } = useHistory();
  
  useEffect(() => {
   axiosWithAuth()
    .get('https://bloomtechrecipebook.herokuapp.com/api/recipes')
    .then(resp => {
      setRecipes(resp.data)
      setAllRecipes(resp.data)})
    .catch(err => console.log(err))
  },[]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setRecipes(recipes.filter(recipe => recipe.title === searchTerm || recipe.category === searchTerm))
  };
  

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1>Your Recipes!</h1>
        <br />
        <form className="search-group" onSubmit={handleSearch}>
          <div>
            <input
              className="search-bar"
              type="search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <br />
            <button onClick={(e) => {e.preventDefault(); push('/new')}} >Add New Recipe</button>
        </form>
        <div className="Recipe-Container">
          {
          recipes
          .filter(recipe => {
            if(searchTerm === "") return recipe
            else return recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.category.toLowerCase().includes(searchTerm.toLowerCase())})
          .map((recipe) => { return (<Recipe recipe={recipe} key={recipe.recipe_id}/>)})
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
