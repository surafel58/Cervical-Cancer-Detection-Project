//import React from "react"
import './editprofile.css'
import SideBar from '../../component/sidebar/SideBar'
const EditProfile = () => {
  return (
    <>
      <SideBar />
      <div className=' w-full h-screen flex bg-slate-100 mx-20'>
        <div className='container flex flex-column justify-center align-items-center h-[550px] shadow-lg shadow-gray-400 sm:max-w-[550px]'>
          <p className=' Edit text font-semibold text-2xl relative'>
            Edit Your Profile
          </p>
          <img className='editImage' src='./images/dn.jpg' alt='not found' />

          <form className='form my-20 '>
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
              </div>
              <div className=' my-5  '>
                <button className='signUpButton justify-center'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProfile
