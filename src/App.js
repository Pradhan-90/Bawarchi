import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Catering from './components/Catering'
import Menu from './components/Menu'
import Recipes from './components/Recipes'



function App() {
  return (
    <>
      <Navbar title="Bawarchi"/>
      <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/ >
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/recipes" element={<Recipes/>}/>
    <Route exact path="/menu" element={<Menu/>}/>
    <Route exact path="/catering" element={<Catering/>}/>
  </Routes>
    </>
  );
}

export default App;
