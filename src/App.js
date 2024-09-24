import React, { Component } from 'react';
import Recipeform from './components/Recipeform';
import Login from './components/Login';
// import { Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Eventbind from './components/Eventbind';
// import Usergreeting from './components/Usergreeting';
// import Namelist from './components/Namelist';
// import person from './person';




function App(){
  return(
    
    <Router>
      <div className='App'>
        <Routes>
          <Route path ="/RecipeForm" element = {<Recipeform/>}/>
          <Route path ="/LoginPage" element = {<Login/>}/>


        </Routes>
      </div>
    </Router>
     
  )  
}



export default App;
