import React, { useState } from "react";
import axios from "axios";

const AddNewRecipes = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: "",
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <div className="form-container">
        <form>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={recipe.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Source
            <input
              type="text"
              name="source"
              value={recipe.source}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredients
            <input
              type="text"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </label>
          <label>
            Instructions
            <input
              type="text"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
            />
          </label>
          <label>
            Category
            <input
              type="text"
              name="category"
              value={recipe.category}
              onChange={handleChange}
            />
          </label>
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewRecipes;
