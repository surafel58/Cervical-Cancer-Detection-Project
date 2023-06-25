import './register.css';
import Validation from './Validation';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase-config';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const Register = () => {

  const initialValues = { name: '', email: '', password: '' };
  const [values, setFormValues] = useState(initialValues);
  const [errors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Signup new user
  const signUp = async (username, email, password) => {

    setIsLoading(true);

    try {
        const user_credential = await createUserWithEmailAndPassword(auth, email, password);
        setIsLoading(false);

        // route to home
        console.log(user_credential);
        navigate("/");
    } 

    catch (error) {

      setIsLoading(false);

      if(error.code === "auth/email-already-in-use"){
        toast.error("Email is already in use!");
      }
      
      else{
        toast.error(error.message);
      }
    }
  }  

  const handleChange = (e) => {
    setFormValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const { errors, is_valid } = Validation(values);

    setFormErrors(errors);

    // create new user if all the credentials are valid
    if(is_valid){
      signUp(values.name, values.email, values.password);
    }

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="contain-register">
          <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1} wrapperClass={"contain-register"}/>
        <div className="register-container">
          <img src="/images/img.jpeg" className="img" alt="notfound" />
         

          <form className="form" onSubmit={handleSubmit}>
            <div className="formContainer">
            <h1 className="heading">CREATE ACCOUNT</h1>
              <div className="formInput">
                <label className="label font-semibold">Username</label>
                <input
                  className="input"
                  type="text"
                  placeholder="username"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
              <div className="formInput">
                <label className="label font-semibold">Email</label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
              <div className="formInput">
                <label className="label font-semibold">Password</label>
                <div className="passwordInputContainer">
                  <input
                    className="input"
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
              </div>
              {errors.password && (
                <p className="error">{errors.password}</p>
              )}
              <div className="buttonContainer">
                <button className="signUpButton">Sign Up</button>
              </div>

              {isSubmitted && <p className="successMessage">{isSubmitted}</p>}
              <div className="bottom">
                <p className="bottomHeader">
                  <Link to="/signin">Already have an account?</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
