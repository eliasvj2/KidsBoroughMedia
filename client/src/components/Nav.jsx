import React, {useContext} from 'react'
import { Link } from 'react-router'
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
                <Link className="nav-link text-purple" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-purple" to={"/product"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-purple" to={"/tracking"}>Tracking</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-purple" to={"/upload"}>Upload</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-purple" to={"/order"}>Orders</Link>
              </li>
              
            
            </ul>
          </div>
        </div>
  
    </nav>

</div>
  )
}

export default Nav