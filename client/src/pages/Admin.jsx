import React from 'react'
import axios from 'axios';
import Navadmin from '../components/Navadmin'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { AuthContext } from '../hooks/authContext';
import "../css/admin.css"


const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
            const fetchData = async ()=>{
              try{
                const res = await axios.get("http://localhost:3500/user");
                setData(res.data);
              }catch(err){

              }
            };
            fetchData();
            
          },[]);
  return (
    <div>
      {/* {console.log(data[0])} */}
        <Navadmin/>
        
        
    
       
        
    </div>
  )
}

export default Admin