import React, {useState} from 'react'
import Nav from '../components/Nav'
import "../css/login.css";
import { Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../hooks/authContext';

const Login = () => {
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const data = {
          username,
          password
        };
        await login(data);
        navigate("/");

      }catch(err){
        console.log(err);
      }    
      };
  return (
    <div>
        <Nav/>
        <h1>Login</h1>
        <div > 
            <section class="vh-100">
    <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid" alt="Phone "/>
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
            {/* <!-- Email input --> */}
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form1Example13" className="form-control form-control-lg" onChange={(e) => setuserName(e.target.value)} />
                <label className="form-label text-purple h4" for="form1Example13">Username</label>
            </div>

            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form1Example23" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}/>
                <label className="form-label text-purple h4" for="form1Example23">Password</label>
            </div>

            <div className="d-flex justify-content-around align-items-center mb-4">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label className="form-check-label text-purple h4" for="form1Example3"> Remember me </label>
                </div>
                <a className='text-yellow h4' href="#!">Forgot password?</a>
                
            </div>
            <Link to={"/register"} ><p className='text-purple h4'>Don't have an account? <a href="#!" class="text-yellow">Register here</a></p> </Link>
            
            {/* <!-- Submit button --> */}
            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block h4" onClick={handleSubmit}>Sign in</button>

           

            </form>
        </div>
        </div>
    </div>
    </section>
        </div>
    </div>
  )
}

export default Login