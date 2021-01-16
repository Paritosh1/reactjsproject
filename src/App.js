import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

import Axios from "axios";
import { Component } from "react";

function App() {
  const [search, setSerach] = useState("burger");
  const [recipes, setRecipes] = useState([]);
  // <Footer/>


  const APP_ID = "c511801d";
  const APP_KEY = "817069a36f1426e641d008c47d2ff0e0";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      <Footer />
    </div>
  );
}


export default App;
