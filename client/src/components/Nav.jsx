import React from 'react'
import { Link } from 'react-router'
import Logo from './Logo'
import "../css/nav.css"
import { useContext } from 'react';
import { AuthContext } from '../hooks/authContext';


function Nav() {
 const { currentUser } = useContext(AuthContext);
  return (
    <div>
         <Logo/>
         
    <nav className="navbar navbar-expand-lg " >   
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {currentUser && <Link className="nav-link text-purple" to={"/order"}>My Orders</Link>}
              </li> 
            </ul>
          </div>
        </div>
  
    </nav>

</div>
  )
}

export default Nav