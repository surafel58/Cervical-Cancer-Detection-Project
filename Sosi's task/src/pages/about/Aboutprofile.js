import React from 'react'
import SideBar from '../../component/sidebar/SideBar'

import './aboutprofile.css'

function Aboutprofile() {
  
  return (
    <>
      <SideBar />
      <div className=' w-full h-screen flex bg-slate-100 mx-20'>
        <div className='container flex flex-column justify-center align-items-center h-[480px] shadow-lg shadow-gray-400 sm:max-w-[550px]'>
          <img className='editImage ' src='./images/dn.jpg' alt='not found' />

          <form className='form my-20 '>
            <div className='formContainer'>
              <div className='formInput '>
                <label className='label font-semibold'>UserName:</label>
                <input className='input' type='text' placeholder='username' />
              </div>
              <div className='formInput '>
                <label className='label font-semibold'>Email:</label>
                <input className='input' type='text' placeholder='email' />
              </div>
              <div className='formInput'>
                <label className='label font-semibold'>Password: </label>
                <input
                  className='input'
                  type='password'
                  placeholder='password'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Aboutprofile
