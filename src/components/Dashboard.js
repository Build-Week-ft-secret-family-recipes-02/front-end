import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css"

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

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1>Your Recipes!</h1>
        <form className="search-group" onSubmit={handleSubmit}>
          <div>
            <input className="search-bar" type="search" value={searchTerm} onChange={handleChange} /><br/>
            <button>Search</button>
          </div>
         
        </form>
        <div className="Recipe-Container">
          {recipes.map((recipe) => {
            return (
              <ul>
                <li key={recipe.id}>{recipe.title}</li>
                <li key={recipe.id}>{recipe.source}</li>
                <li key={recipe.id}>{recipe.category}</li>
                <li key={recipe.id}>{recipe.instructions}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
