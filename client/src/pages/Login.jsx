import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import "../css/login.css";
import { Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../hooks/authContext';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);
    const [content, setContent] = useState({});

    useEffect(() => {
      if(currentUser){
              const role = jwtDecode(currentUser.accessToken).UserInfo.roles;
              
              if(role === "Admin"){
                navigate("/admin/user");
              }else{
                navigate('/order');
              }}
              
            }, [currentUser]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const data = {
          username,
          password

        };
        await login(data);
      }catch(err){
        console.log(err);
      }    
      };
  return (
    <div>
        <Nav/>
        
        <div > 
        <section class="vh-70 gradient-custom">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="card bg-login text-white" style={{borderRadius: "1rem;"}}>
                    <div class="card-body p-5 text-center">

                      <div class="mb-md-5 mt-md-4 pb-5">

                        <h2 class="fw-bold mb-2 text-uppercase card-login-text">Login</h2>
                        <p class="card-login-text mb-5">Please enter your username and password!</p>

                        <div data-mdb-input-init class="form-outline form-white mb-4">
                          <input type="email" id="typeEmailX" onChange={(e) => setuserName(e.target.value)} class="form-control form-control-lg" />
                          <label class="form-label card-login-text" for="typeEmailX">Username</label>
                        </div>

                        <div data-mdb-input-init class="form-outline form-white mb-4">
                          <input type="password" id="typePasswordX" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                          <label class="form-label card-login-text" for="typePasswordX">Password</label>
                        </div>

                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" onClick={handleSubmit} type="submit">Login</button>

                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                          <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                          <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                        </div>

                      </div>

                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Login