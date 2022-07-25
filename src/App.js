import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/Navbar'
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Logout from "./pages/login/Login"
import Details from "./pages/details/Details"

import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/logOut" element={<Logout/>}/>
    <Route path="/Details:recipe.label" element={<Details/>}/>


    </Routes>




    </BrowserRouter>
    </div>
  )
}

export default App
