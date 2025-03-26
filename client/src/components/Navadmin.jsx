import React from 'react'
import Logo from './Logo'
function Navadmin() {
  return (
    <div>
             <Logo/>
         
         <nav className="navbar navbar-expand-lg " >   
             <div className="container-fluid">
               <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                   <li className="nav-item">
                     {/* <Link className="nav-link text-purple" to={"/order"}>Orders</Link> */}
                   </li> 
                 </ul>
               </div>
             </div>
       
         </nav>
    </div>
  )
}

export default Navadmin