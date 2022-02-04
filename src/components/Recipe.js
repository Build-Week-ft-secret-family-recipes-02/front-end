import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "axios";
import AllRecipesContext from "../context/AllRecipes";
import "../styles/Dashboard.css"


const Recipe = (props) => {
  const { setAllRecipes } = useContext(AllRecipesContext)
  const { recipe } = props;
  const { push } = useHistory();

  useEffect(() => {});

  const handleEdit = () => {
    push(`/recipes/update/${recipe.id}`);
  };

  function handleClick(e, recipe) {
    e.preventDefault();
    push(`/dashboard/edit/${recipe.recipe_id}`);
  }

  const handleDelete = (e) => {
    e.preventDefault()
    // axiosWithAuth().delete()
    // setAllRecipes()
    
  }

  return (
    <div>
       <div className="Recipe-card">
                <div className="card-img">
              
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <p>{recipe.title}</p>
                  </div>
                  <div className="col-1">
                    <div className="top">
                      <p>Category: {recipe.category}</p>
                      <p>Source: {recipe.source}</p>
                    </div>
                    <div className="bottom">
                      <p>{recipe.ingredients}</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <p>Instructions :</p>
                    <p>{recipe.instructions}</p>
                  </div>
                  <div className="buttons">
                    <span onClick={(e) => {handleClick(e, recipe);}}>Edit</span>
                    <span onClick={handleDelete}>Delete</span>
                  </div>
                  
                </div>
              </div>
    </div>
  );
};

export default Recipe;
