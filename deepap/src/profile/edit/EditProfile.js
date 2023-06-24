
import './editprofile.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileValidation from './profilevalidation';

const EditProfile = () => {
  const initialValues = { name: '', email: '', password: '' };
  const [errors, setFormErrors] = useState({});
  const [values, setFormValues] = useState(initialValues);

  const navigate = useNavigate();

     const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(profileValidation(values));
    };
    const handleChange = (e) => {
      setFormValues({ ...values, [e.target.name]: e.target.value });
    };
  
  return (
    <>
      <div className="edit-profile-container">
        <div className="edit-profile-content">
          {/* <p className="edit-profile-title">Edit Your Profile</p> */}
          <img className="edit-image" src="/images/dn.jpg" alt="not found" />

          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="edit-form-container">
              <div className="edit-form-input">
                <label className="edit-label">Username</label>
                <input className="edit-input" 
                type="text" 
                placeholder="username"
                name='name'
                value={values.name}
                onChange={handleChange} />
              </div>
              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
              <div className="edit-form-input">
                <label className="edit-label">Email</label>
                <input  className="edit-input" 
                        type="text" 
                        placeholder="email"
                        name='email' 
                        value={values.email}
                       onChange={handleChange}/>
              </div>
              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
              <div className="edit-form-input">
                <label className="edit-label">Password</label>
                <input 
                 className="edit-input"
                 type="password" 
                 placeholder="password"
                 name='password'
                 value={values.password}
                 onChange={handleChange} />
              </div>
              {errors.password && (
                <p className="error">{errors.password}</p>
              )}
              <div className="edit-form-input">
                <label className="edit-label">Confirm Password</label>
                <input 
                className="edit-input"
                 type="password" 
                placeholder="confirm password"
                name='confirmpassword'
                value={values.confirmpassword}
                onChange={handleChange} />
              </div>
              {errors.confirmpassword && (
                <p className="error">{errors.confirmpassword}</p>
              )}

              <div className="edit-form-buttons">
                <button className="edit-submit-button">Submit</button>

                <div className="edit-delete-button">
                  <button className="edit-delete-text"  onClick={() => navigate('/deleteprofile')}>
                    Delete Account
                  </button>
                  {/* <Confirmation trigger={buttonPopup} setTrigger={setButtonPopup} /> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
