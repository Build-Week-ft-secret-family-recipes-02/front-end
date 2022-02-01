import React from "react";

const Recipe = (props) => {
  const { recipe } = props;

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
