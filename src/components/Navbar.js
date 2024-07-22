import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  
  return (
    <>
  <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `} >
  <div className="container-fluid" >
    <Link className="navbar-brand primary-color" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active secondary-color" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active secondary-color" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active secondary-color" to="/chatAi">Chat with AI</Link>
        </li>
      </ul>
      <div className="form-check form-switch mx-2">
      <input className="form-check-input mt-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className={`form-check-label mt-2 secondary-color`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>
    </>
  )
}
 
Navbar.propTypes={title:PropTypes.string.isRequired}

Navbar.defaultProps={title:"set title here"}