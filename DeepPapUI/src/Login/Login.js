import './login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loginvalidation from './Loginvalidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import auth from '../config/firebase-config'
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const Login = () => {
  const [values, setValues] = useState({ name: '', password: '', email: ''});
  const [errors, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {

      setIsLoading(true);

      try {
        
          const user_credential = await signInWithEmailAndPassword(auth, email, password);
          setIsLoading(false);
          console.log(user_credential);
          navigate("/");


      } catch(error) {

        setIsLoading(false);

        if(error.code === "auth/wrong-password"){
          toast.error("Wrong password!");
        }

        else if(error.code === "auth/user-not-found"){
          toast.error("Account doesn't exist! Please enter a correct Email and password");
        }

        else{
          toast.error(error.message);
        }
      }
     
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const { errors, is_valid } = Loginvalidation(values);
    setError(errors);

    // Login user if credential is valid
    if(is_valid){
      login(values.email, values.password);
    }
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <>
        <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1}/>    
        <div className="login-container">
      <div className='mini-container'>
          <div className="login-image">
            <img className="login-image-inner" src='/images/login.jpg' alt="notfound" />
          </div>
          <div className="login-form">
            <form className="login-form-inner" onSubmit={handleSubmit}>
              <h2 className="login-form-title">WELCOME BACK</h2>
              <div className="login-input-group">
                <label className="login-label">Email</label>
                <input
                  className="login-input"
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="login-input-group">
                <label className="login-label">Password</label>
                <div className="passwordInputContainer">
                  <input
                    className="login-input"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="passwordToggle"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="passwordToggleIcon"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
              <div className="login-links">
                <p className="forgot-password-link">Forgot password?</p>
                <p className="signup-link">
                  <Link to="/signup">Create an account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer/>
        </div>
    
    </>
  );
};

export default Login;
