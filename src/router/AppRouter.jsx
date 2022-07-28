import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/navbar/Navbar'
import Home from "../pages/home/Home"
import About from "../pages/about/About"
// import Logout from "../pages/login/Login"
import Details from "../pages/details/Details"
import PrivateRouter from "./PrivateRouter";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../pages/login/Login'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Login/>}/>


    <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>


        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>


    {/* <Route path="/logOut" element={<Logout/>}/> */}


    <Route path="/Details" element={<Details/>}/>


    </Routes>




    </BrowserRouter>
    </div>
  )
}

export default App
