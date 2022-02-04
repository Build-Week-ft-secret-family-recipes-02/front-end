import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Recipe = (props) => {
  const { recipe } = props;
  const { push } = useHistory();

  const handleEdit = () => {
    push(`/recipe/edit/${recipe.recipe_id}`);
  };

  const handleDelete = (e) => {};

  return (
    <div>
      <h3>{recipe.title}</h3>
      <h4>{recipe.source}</h4>
      <p>{recipe.category}</p>
      <p>{recipe.instructions}</p>
      <button onClick={handleEdit}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Recipe;
