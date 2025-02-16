import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">News App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" to="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/technology">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
