import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Dashboard.css";
import EditRecipe from "./EditRecipe";
import AllRecipesContext from "../context/AllRecipes";
import axiosWithAuth from "../util/axiosWithAuth";
const Dashboard = () => {
  const { allRecipes } = useContext(AllRecipesContext)
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   axiosWithAuth().get('https://bloomtechrecipebook.herokuapp.com/api/recipes')
   .then(resp => setRecipes(resp.data))
   .catch(err => console.log(err))
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setRecipes(recipes.filter(recipe => recipe.title === searchTerm || recipe.category === searchTerm))
  };

  const { push } = useHistory();

  function handleClick(e, recipe) {
    e.preventDefault();
    push(`/dashboard/${recipe.id}`);
  }

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

          {recipes.filter(recipe => {
            if(searchTerm === "") return recipe
            else return recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
          }).map((recipe, index) => {
            return (
              <div className="Recipe-card"
                    key={index}
                    onClick={(e) => {handleClick(e, recipe);}}
              > 
                <div className="card-img">
              
                </div>

                <div className="card-info">
                  <div className="card-title">
                    <p>{recipe.title}</p>
                  </div>
                  <div className="col-1">
                    <div className="left">
                      <p>{recipe.category}</p>
                      <p>{recipe.source}</p>
                    </div>
                    <div className="right">
                      <p>{recipe.ingredients}</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <p>{recipe.instructions}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
