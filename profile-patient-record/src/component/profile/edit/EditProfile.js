//import React from "react"
import './editprofile.css'
import Confirmation from '../confirmation/Confirmation'
import { useState } from 'react'

const EditProfile = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <>
      <div className=' w-full h-full flex bg-slate-100'>
        <div className='container flex flex-column justify-center align-items-center h-[630px] shadow-lg shadow-gray-400 sm:max-w-[600px] '>
          <p className=' Edit text font-semibold text-2xl relative  '>
            Edit Your Profile
          </p>
          <img className='editImage' src='./images/dn.jpg' alt='not found' />

          <form className='formEdit'>
            <div className='formContainer'>
              <div className='formInput '>
                <label className='label font-semibold'>Username</label>
                <input className='input' type='text' placeholder='username' />
              </div>
              <div className='formInput '>
                <label className='label font-semibold'>Email</label>
                <input className='input' type='text' placeholder='email' />
              </div>
              <div className='formInput'>
                <label className='label font-semibold'>Password</label>
                <input
                  className='input'
                  type='password'
                  placeholder='password'
                />
                <div className='formInput'>
                  <label className='label font-semibold'>
                    Confirm Password
                  </label>
                  <input className='input' type='text' placeholder='Password' />
                </div>
              </div>

              <div className='divBut'>
                <button className='signUpButton justify-center'>Submit</button>

                <div className='editDelete'>
                  <button
                    className='signUpButton text-12'
                    onClick={() => setButtonPopup(true)}
                  >
                    Delete Account
                  </button>
                  <Confirmation
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                  ></Confirmation>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProfile
