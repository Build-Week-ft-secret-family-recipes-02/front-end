import React, { useEffect, useState, useContext } from "react";
import axiosWithAuth from "../util/axiosWithAuth";
import { useParams } from "react-router";
import "../styles/EditRecipe.css"
import AllRecipesContext from "../context/AllRecipes";
const initialState = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
}


const EditRecipe = () => {
  const { id } = useParams()
  const [editedRecipe, setEditedRecipe] = useState(initialState)
  const { setAllRecipes } = useContext(AllRecipesContext)

  useEffect(() => {
    axiosWithAuth()
        .get(`https://bloomtechrecipebook.herokuapp.com/api/recipes`)
        .then(resp => {
          const data = resp.data.filter(recipe => recipe.recipe_id === parseInt(id))
          setEditedRecipe(data[0])
        })
        .catch(err => console.log(err))
}, [])

  const handleChange = (e) => {
    setEditedRecipe({...editedRecipe, [e.target.name]: e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault()
    // axiosWithAuth().put()
    // .then(setAllRecipes())
  }

  return (
    <div className="edit-page-container">
      <div className="edit-box">
      <h1>Edit Recipes!</h1>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                className="input-field"
                type="text"
                name="title"
                value={editedRecipe.title}
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
                value={editedRecipe.source}
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
                value={editedRecipe.ingredients}
                onChange={handleChange}
                placeholder="ingredients"
              />
              <label className="input-label">Ingredients</label>
            </div>

            <div className="input-group">
              <input
                className="input-field"
                type="text"
                value={editedRecipe.category}
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
                  value={editedRecipe.instructions}
                  onChange={handleChange}
                  placeholder="Type your recipe instructions here"
                />
            </div>
      </div>
    </div>
    </div>
    </div>
  )
}
export default EditRecipe;
