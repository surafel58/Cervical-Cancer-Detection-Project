import React from 'react'

function Confirmation() {
  return (
    <div className=' w-full h-screen flex bg-slate-100'>
        <div className='container flex flex-column justify-center align-items-center h-[250px] shadow-lg shadow-gray-400 sm:max-w-[600px]'>
          
          <form className='formEdit'>
            <div className='formContainer'>
              <div className='formInput '>
                <label className='label font-semibold'>Username</label>
                <input className='input' type='text' placeholder='username' />
              </div>
              
              <div className='formInput'>
                <label className='label font-semibold'>Password</label>
                <input
                  className='input'
                  type='password'
                  placeholder='password'
                />
                 </div>
             
                <div className='divBut'>
                  <button className='signUpButton justify-center'>
                    Verify
                  </button>
                  </div>
                  </div>
    </form>
    </div>
    </div>
   
  )
}

export default Confirmation
