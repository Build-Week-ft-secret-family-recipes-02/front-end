import React, { useState } from "react";
import axios from "axios";
import "../styles/AddNewRecipes.css"

const AddNewRecipes = () => {
  const [image, setImage] = useState()
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

  const fileUp = (e) => {
    const imageUpload = e.target.value;
    setImage(imageUpload)
  }

  return (
    <div className="page-container">
      <h1>Add New Recipe</h1>
      <div className="form-container">
        <form className="form">
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              placeholder="title"
            />
            <label className="input-label">Title</label>
          </div>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              name="source"
              value={recipe.source}
              onChange={handleChange}
              placeholder="source"
            />
            <label className="input-label">Source</label>
          </div>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              placeholder="ingredients"
            />
            <label className="input-label">Ingredients</label>
          </div>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              name="category"
              value={recipe.category}
              onChange={handleChange}
              placeholder="category"
            />
            <label className="input-label">Category</label>
          </div>
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
        <div className="right-container">
          <div className="img">
            
          </div>
          <div className="instructions">
              <textarea
                type="text"
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
                placeholder="Type your recipe instructions here"

              />
              <input type="file" onChange={fileUp}/>
              <label className="instructions-label">Instructions</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewRecipes;
