import React, {useContext, useEffect} from 'react'
import Nav from '../components/Nav'
import "../css/order.css";
import Order from '../components/Order';
import SelfService from "../images/selfService.jpg"
import virtualClassroom from "../images/virtualclassroom.jpg"
import { jwtDecode } from "jwt-decode";
import { AuthContext } from '../hooks/authContext';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
const Orders = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const data = [
    { id: "#1fkdsl2341", name: 'Self Service', price: 80, date: "01/01/2025", delivered: "On going", imgSource: SelfService },
    { id: "#2dhgkskle34", name: 'Virtual Classroom', price: 50, date: "05/06/2025", delivered: "02/25/2025", imgSource: virtualClassroom }
  ];
  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const userId = jwtDecode(currentUser.accessToken).UserInfo.userId;
        const res = await axios.post("http://localhost:3500/order/orders", userId);
        setOrders(res.data);
      }catch(err){

      }
    };
    fetchData();
    
  },[]);
  
  return (
    <div>
      
{console.log(orders)}

      <Nav/>
    
      <div >
      {data.map((item) => (<Order  key={item.id} props={item} />))}
      
      </div>
      
       
      
    </div>
  )
}

export default Orders