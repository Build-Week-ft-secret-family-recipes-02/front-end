import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Recipe from "./Recipe";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://bloomtechrecipebook.herokuapp.com/api/recipes")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recipes.filter((recipe) => {
      return setRecipes(recipe === searchTerm);
    });
  };

  const { push } = useHistory();

  function handleClick(e, recipe) {
    e.preventDefault();
    push(`/dashboard/${recipe.id}`);
  }

  return (
    <div>
      <h1>Your Recipes!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="search" value={searchTerm} onChange={handleChange} />
          <button>Search</button>
        </div>
      </form>
      <div className="Recipe-Container">
        {recipes.map((recipe) => {
          return (
            <div
              className="Recipe-card"
              key={recipe.id}
              onClick={(e) => {
                handleClick(e, recipe);
              }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.source}</p>
              <p>{recipe.category}</p>
              <p>{recipe.instructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
