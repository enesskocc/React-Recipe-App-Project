import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">EK</Link>
    
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target="_blank" href="https://github.com/enesskocc">GITHUB</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">LOGOUT</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar