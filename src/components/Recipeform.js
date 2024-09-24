import './Recipe.css';
import React, { useState } from 'react';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    recipeTitle: '',
    description: '',
    ingredients: '',
    steps: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    category: '',
    videoLink: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe Submitted:', formData);
    // Clear the form
    setFormData({
      recipeTitle: '',
      description: '',
      ingredients: '',
      steps: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      category: '',
      videoLink: ''
    });
  };

  return (
   
      <div className='body'>
        <h2 className='recipe'>RecipeForm</h2>
        <label className='title'>Recipe Title:</label>
        <input
          type="text"
          name="recipeTitle"
          value={formData.recipeTitle}
          onChange={handleChange}
          required
        />
      

  
      
        <label className='des'>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      

      
      
        <label className='ing'>Ingredients (comma separated):</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      


      
        <label className='step'>Steps (comma separated):</label>
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          required
        />
      

      
      
        <label className='pre'>Preparation Time (in minutes):</label>
        <input
          type="number"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleChange}
          required
        />
      

      
        <label className='cook'>Cooking Time (in minutes):</label>
        <input
          type="number"
          name="cookTime"
          value={formData.cookTime}
          onChange={handleChange}
          required
        />
      

      
      
        <label className='serving'>Servings:</label>
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          required
        />
      

    
      
        <label className='cate'>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="snacks">Snacks</option>
        </select>
      

    
      
        <label className='video'>Video Link:</label>
        <input
          type="url"
          name="videoLink"
          value={formData.videoLink}
          onChange={handleChange}
        />
    


    <button type="submit" className='add'>Add Recipe</button>
      </div>

   
  );
};

export default RecipeForm;
