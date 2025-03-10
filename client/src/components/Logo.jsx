import React, {useContext} from 'react'
import "../css/logo.css";
import { AuthContext } from '../hooks/authContext'
import { Link } from 'react-router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {jwtDecode} from "jwt-decode";

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
            <span onClick={logout}>{jwtDecode(currentUser.accessToken).UserInfo.username} </span>
            <AccountCircleIcon/>
           </div>
            
            
            
          ) : (
            <Link className="text-purple" to="/login">
              Login
            </Link>
          )}
         
        </div>
        
        <hr />




    </div>
    
  )
}

export default Logo