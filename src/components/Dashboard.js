import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Dashboard.css";
import Recipe from "./Recipe";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://bloomtechrecipebook.herokuapp.com/api/recipes")
      .then((resp) => setRecipes(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes(
      recipes.filter((recipe) => {
        return recipe.title === searchTerm || recipe.category === searchTerm;
      })
    );
  };

  const { push } = useHistory();

  function handleClick(e, recipe) {
    e.preventDefault();
    push(`/dashboard/${recipe.recipe_id}`);
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1>Your Recipes!</h1>
        <form className="search-group" onSubmit={handleSubmit}>
          <div>
            <input
              className="search-bar"
              type="search"
              value={searchTerm}
              onChange={handleChange}
            />
            <br />
            <button>Search</button>
          </div>
        </form>
        <div className="Recipe-Container">
          {recipes.map((recipe) => {
            return (
              <div
                className="Recipe-card"
                key={recipe.recipe_id}
                onClick={(e) => {
                  handleClick(e, recipe);
                }}
              >
                <Recipe recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
