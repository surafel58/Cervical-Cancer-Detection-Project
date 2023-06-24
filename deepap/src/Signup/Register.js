import './register.css';
import Validation from './Validation';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const initialValues = { name: '', email: '', password: '' };
  const [values, setFormValues] = useState(initialValues);
  const [errors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState('');

  const handleChange = (e) => {
    setFormValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validation(values));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="contain-register">
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
    </>
  );
};

export default Register;
