import React, { useState, useContext } from "react";
import axios from "axios";
import "../styles/AddNewRecipes.css"
import AllRecipesContext from "../context/AllRecipes";
import { useHistory } from "react-router";
import axiosWithAuth from "../util/axiosWithAuth";

const initialState = {
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: "",
}

const AddNewRecipes = () => {
  const [image, setImage] = useState()
  const { allRecipes, setAllRecipes } = useContext(AllRecipesContext)
  const [recipe, setRecipe] = useState(initialState);
  const { push } = useHistory();

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post('https://bloomtechrecipebook.herokuapp.com/api/recipes', recipe)
      .then(resp => setAllRecipes([...allRecipes, resp.data]))
      .catch(err => console.log(err))
      .finally(setRecipe(initialState))
    push('/dashboard')
  };

  return (
    <div className="page-container">
      <h1>Add New Recipe</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
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
          <button>Submit</button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewRecipes;
