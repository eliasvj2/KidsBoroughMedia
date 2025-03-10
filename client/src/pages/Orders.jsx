import React from 'react'
import Nav from '../components/Nav'
import Product from '../components/Product';
import "../css/order.css";
import Order from '../components/Order';
const Orders = () => {
  // const [product, setProduct] = useState([]);
  const data = [
    { id: 1, name: 'Apple', description: 'A red fruit', value: 10 },
    { id: 2, name: 'Banana', description: 'A yellow fruit', value: 5 },
    { id: 3, name: 'Orange', description: 'An orange fruit', value: 8 },
  ];
  return (
    <div>
      


      <Nav/>
      <h1>Orders</h1>
      <div >
      {data.map((item) => (<Order  key={item.id} prop={item} />))}
      
      </div>
      
       
      
    </div>
  )
}

export default Orders