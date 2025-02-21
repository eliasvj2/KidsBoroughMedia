import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Nav from '../components/Nav'
import "../css/info.css";
import axios from "axios";
import background from "../images/color_drawing.jpg"


const Info = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigate = useNavigate();
  


  const handleChange = () => {
    const data = {
      firstName,
      lastName,
      email,
    };
   
    axios.post('http://localhost:3500/info', data)
      .then(() => {
        
        // navigate('/');
      })
      .catch((error) => {
        
        // alert('An error happened. Please Chack console');
        
        console.log(error);
      });
  };
      


  return (
    <div >
    {console.log(firstName)}
    <Nav/>
    <h1>First we need to collect some information</h1>

    <div  className=''>
     
     
     
      <div id='content' className='form-row'>
        <div className='form-group col-md-6'>
          <label className='h4 text-purple'>First Name</label>
          <input
            placeholder='veronica'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='form-control'
          />
        </div>

        <div className='form-group col-md-6'>
          <label className='h4 text-purple'>Last Name</label>
          <input
            placeholder='smith'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='form-control'
          />
        </div>

        <div className='form-group '>
          <label for ="inputEmail" className='h4 text-purple'>Email</label>
          <input
          placeholder='veronicasmith@hotmail.com'
            id='inputEmail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>

        <div class="form-group">
          <label for="inputAddress" className='h4 text-purple'>Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>

        <div class="form-group col-md-6">
          <label for="inputCity" className='h4 text-purple'>City</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>


        <div class="form-group col-md-4">
          <label for="inputCity" className='h4 text-purple'>State</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>

    <div class="form-group col-md-2">
      <label for="inputZip" className='h4 text-purple'>Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>

        
        <button className='btn btn-primary' onClick={handleChange}>
         Submit
        </button>
      </div>
    </div>





    </div>
  )
}

export default Info