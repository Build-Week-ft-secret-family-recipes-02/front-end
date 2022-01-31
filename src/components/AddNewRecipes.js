import React from "react";

const AddNewRecipes = () => {
  return (
    <div>
      <h1>Add New Recipe</h1>
      <div className="form-container">
        <form>
          <label>
            Title
            <input type="text" />
          </label>
          <label>
            Source
            <input type="text" />
          </label>
          <label>
            Ingredients
            <input type="text" />
          </label>
          <label>
            Instructions
            <input type="text" />
          </label>
          <label>
            Category
            <input type="text" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewRecipes;
