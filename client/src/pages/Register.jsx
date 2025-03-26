import React, {useState} from 'react'
import Nav from '../components/Nav'
import "../css/register.css"
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


const Register = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const navigate = useNavigate();

    const handleChange = () => {

      const data = {
        username,
        password,
        selectedRole
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

                 

                 

                  <div class="mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Examplev4" class="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)}/>
                      <label class="form-label" for="form3Examplev4">Username</label>
                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div data-mdb-input-init class="form-outline">
                      <input type={showPassword ? 'text' : 'password'} id="form3Examplev4" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}/>
                      
                      <label class="form-label" for="form3Examplev4">Password</label>
                      <span onClick={togglePasswordVisibility} style={{ marginLeft: '5px', cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </span>
                    </div>

                    <div class="form-group">
                    <label for="exampleFormControlSelect1" >Role:</label>
                    <select name='selectedRole' class="form-control" id="exampleFormControlSelect1" onChange={(e) => setSelectedRole(e.target.value)}>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Facilitator</option>
                      
                    </select>
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
  </div>
</section>
    </div>
  )
}

export default Register