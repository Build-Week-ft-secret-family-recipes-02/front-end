import React, { useEffect, useState } from "react";

const EditRecipe = () => {
  const [editedRecipe, setEditedRecipe] = useState({
    title: "",
    source: "",
    category: "",
    instructions: "",
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setEditedRecipe({
      ...editedRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Edit Recipe!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            name="title"
            value={editedRecipe}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Source
          <input
            name="source"
            value={editedRecipe}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Category
          <input
            name="category"
            value={editedRecipe}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Instructions
          <input
            name="instructions"
            value={editedRecipe}
            onChange={handleChange}
          ></input>
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditRecipe;
