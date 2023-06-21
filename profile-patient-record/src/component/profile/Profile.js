//import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import Confirmation from './confirmation/Confirmation'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './profile.css'

//import Navbar from '../navbar/Navbar'
//import SideBar from '../sidebar/SideBar'

function Profile() {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <>
      
      <div className='profile p-4 w-full h-screen bg-slate-100'>
        <div className='container flex flex-column justify-center align-items-center h-[500px] shadow-lg shadow-gray-600 sm:max-w-[800px]'>
          <img className='image' src='./images/dn.jpg' alt='not found' />

          <label htmlFor='' className=' text mt-3 font-semibold text-3xl'>
            Abubeker Kedir
          </label>

          <InputText
            type='file'
            accept='/image/*'
            style={{ display: 'none' }}
          />
          <p className='updateprofile'>
            {' '}
            <Link to='/edit' className=' link font-semibold'>
              Update your profile
            </Link>{' '}
          </p>
          <div className='deleteprofile'>
            <button
              className='deleteAcc  font-semibold'
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
    </>
  )
}

export default Profile
