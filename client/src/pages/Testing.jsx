import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import axios from 'axios';


const Testing = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        
        axios
          .get(`http://localhost:3500/info`)
          .then((response) => {
            setContent(response.data);
            
          })
          .catch((error) => {
            console.log(error);
            
          });
      }, []);
  return (
    <div>
        <Nav/>
        <h1>Testing</h1>


    </div>
  )
}

export default Testing