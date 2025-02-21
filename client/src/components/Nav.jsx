import React from 'react'
import Logo from './Logo'
import "../css/nav.css"

function Nav() {
  return (
    <div>
         <Logo/>
    <nav className="navbar navbar-expand-lg " >   
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-purple" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-purple" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-purple" href="#">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-purple" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-purple" href="#">Submissions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-purple" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Nav