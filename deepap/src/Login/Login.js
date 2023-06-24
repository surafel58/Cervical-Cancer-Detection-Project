import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loginvalidation from './Loginvalidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [values, setValues] = useState({ name: '', password: '' });
  const [errors, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Loginvalidation(values));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div className="login-container">
  <div className='mini-container'>
      <div className="login-image">
        <img className="login-image-inner" src='/images/login.jpg' alt="notfound" />
      </div>
      <div className="login-form">
        <form className="login-form-inner" onSubmit={handleSubmit}>
          <h2 className="login-form-title">WELCOME BACK</h2>
          <div className="login-input-group">
            <label className="login-label">Username</label>
            <input
              className="login-input"
              type="text"
              name="name"
              placeholder="username"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
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
    </div>
  );
};

export default Login;
