import React, {useState} from 'react'
import Nav from '../components/Nav'
import "../css/register.css"
import { useNavigate } from 'react-router'
import axios from 'axios'


const Register = () => {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleChange = () => {

      const data = {
        firstName,
        lastName,
        email,
        street,
        city,
        state,
        zip,
        phoneNumber,
        username,
        password
      };
     
      axios.post('http://localhost:3500/auth/register', data)
        .then(() => {
          
          navigate('/login');
        })
        .catch((error) => {
          
          // alert('An error happened. Please Check console');
          
          console.log(error);
        });
    };

  return (
    <div>
        <Nav/>
        <h1>Register</h1>
        <section class="h-100 h-custom gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: 15}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="p-5">
                  <h3 className="fw-normal mb-5 text-purple text-purple" >General Infomation</h3>

                 

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline">
                        <input value={firstName}
            onChange={(e) => setFirstName(e.target.value)} type="text" id="form3Examplev2" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplev2">First name</label>
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline">
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onChange={(e) => setLastName(e.target.value)}/>
                        <label class="form-label" for="form3Examplev3">Last name</label>
                      </div>

                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Examplev4" class="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)}/>
                      <label class="form-label" for="form3Examplev4">Username</label>
                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Examplev4" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}/>
                      <label class="form-label" for="form3Examplev4">Password</label>
                    </div>
                  </div>
{console.log(lastName)};
                  

                </div>
              </div>
              <div class="col-lg-6 bg-indigo text-black font-weight-bold">
                <div class="p-5">
                  <h3 class="fw-normal mb-5">Contact Details</h3>

                  <div class="mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline form-white">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" onChange={(e) => setStreet(e.target.value)}/>
                      <label class="form-label" for="form3Examplea2">Street + Nr</label>
                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline form-white">
                      <input type="text" id="form3Examplea3" class="form-control form-control-lg" onChange={(e) => setState(e.target.value)}/>
                      <label class="form-label" for="form3Examplea3">State</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-5 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline form-white">
                        <input type="text" id="form3Examplea4" class="form-control form-control-lg" onChange={(e) => setCity(e.target.value)}/>
                        <label class="form-label" for="form3Examplea4">City</label>
                      </div>

                    </div>
                    <div class="col-md-7 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline form-white">
                        <input type="text" id="form3Examplea5" class="form-control form-control-lg" onChange={(e) => setZip(e.target.value)}/>
                        <label class="form-label" for="form3Examplea5">Zip Code</label>
                      </div>

                    </div>
                  </div>

                  

                  <div class="row">
                    
                    <div class="mb-4">

                      <div data-mdb-input-init class="form-outline form-white">
                        <input type="text" id="form3Examplea8" class="form-control form-control-lg" onChange={(e) => setphoneNumber(e.target.value)}/>
                        <label class="form-label" for="form3Examplea8">Phone Number</label>
                      </div>

                    </div>
                  </div>

                  <div class="mb-4">
                    <div data-mdb-input-init class="form-outline form-white">
                      <input type="text" id="form3Examplea9" class="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}/>
                      <label class="form-label" for="form3Examplea9">Your Email</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4 pb-3">
                    <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label text-white" for="form2Example3">
                      I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                      site.
                    </label>
                  </div>

                  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                    data-mdb-ripple-color="dark" onClick={handleChange}>Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register