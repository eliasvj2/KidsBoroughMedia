import React, {useContext} from 'react'
import "../css/logo.css";
import { AuthContext } from '../hooks/authContext'
import { Link } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';

const Logo = () => {
   const { currentUser, logout } = useContext(AuthContext);
  
   
   
   
   
  return (
    <div> 
        <br />
        <span id='span1'>Kid's  </span> <span id='span2'>Corner</span>
        <br />
        <span id = "span3">       Author            </span>

     
        <div className='login'>
        
        {currentUser ? (
           <div>
            Logout
            
            <span onClick={logout}> <LogoutIcon /> </span>
            
           </div>
 
          ) : (
            <Link className="text-purple" to="/">
              Login
            </Link>
          )}
         
        </div>
        
        <hr />




    </div>
    
  )
}

export default Logo