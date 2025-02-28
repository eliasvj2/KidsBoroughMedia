import React, {useState} from 'react'
import Product from '../components/Product';
import Nav from '../components/Nav';

const Products = () => {
    // const [product, setProduct] = useState([]);
    const data = [
        { id: 1, name: 'Apple', description: 'A red fruit', value: 10 },
        { id: 2, name: 'Banana', description: 'A yellow fruit', value: 5 },
        { id: 3, name: 'Orange', description: 'An orange fruit', value: 8 },
      ];
  return (
    <div>
        <Nav/>
        {data.map((item) => (<Product key={item.id} prop={item} />))}
        {/* <Product item ={product}/> */}
        {/* <Product/> */}
    </div>
  )
}

export default Products