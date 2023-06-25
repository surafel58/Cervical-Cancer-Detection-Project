import React from 'react'
import './DeleteProfile.css'
import { useState } from 'react';
import deleteValidation from './deletevalidation';
function Confirmation() {
  const initialValues = {name: '', password: '' };
  const [values, setFormValues] = useState(initialValues);
  const [errors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(deleteValidation(values));
  };

  return (
    <div className='containsdelete'>
    <div className='delete-container'>
        <div className='delete-inner-container'>
          
          <form className='formEdit' onSubmit={handleSubmit}>
            <div className='formContainer'>
              <div className='formInput '>
                <label className='label'>Username</label>
                <input className='input' 
                type='text'
                 placeholder='username'
                 name='name'
                 value={values.name} 
                 onChange={handleChange}/>
              </div>
              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
            <div className='formInput'>
                <label className='label'>Password</label>
                <input
                  className='input'
                  type='password'
                  placeholder='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                />
            </div>
           
            {errors.password && (
                <p className="error">{errors.password}</p>
              )}
              <div className='deleteBtn'>
                  <button className='verifybtn'>
                    Verify
                  </button>
                  </div>
             </div>
    </form>
</div>
</div>
</div>
  )
}

export default Confirmation
