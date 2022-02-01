import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Recipe = (props) => {
  const { recipe } = props;
  const { push } = useHistory();

  useEffect(() => {});

  const handleEdit = () => {
    push(`/recipes/update/${recipe.id}`);
  };

  const handleDelete = (e) => {};

  return (
    <div>
      <h3>{recipe.title}</h3>
      <h4>{recipe.source}</h4>
      <p>{recipe.category}</p>
      <p>{recipe.instructions}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Recipe;
