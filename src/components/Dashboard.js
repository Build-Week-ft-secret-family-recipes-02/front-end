import axios from "axios";
import React, { useEffect, useState } from "react";

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
  );
};

export default Dashboard;
