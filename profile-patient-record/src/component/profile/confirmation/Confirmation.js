// import React from 'react'
// import './confirmation.css'
// import InfoIcon from '@mui/icons-material/Info'
// import { useNavigate } from 'react-router-dom'

// export default function Confirmation(props) {
//   const Navigate = useNavigate()

//   return props.trigger ? (
//     <>
//       <div className='popup shadow-lg shadow-gray-400'>
//         <div className='popup-inner ]'>
//           <div className='deletetxt'>
//             <span className='infoIcon'>
//               <InfoIcon />
//             </span>
//             <span className='txt'>
//               Are you sure you want to delete this account?
//             </span>
//           </div>
//           <div className='confirm-btn-container'>
//             <button
//               className='confirm-btn'
//               onClick={() => Navigate('/deleteprofile')}
//             >
//               Confirm
//             </button>
//             <button
//               className='close-btn'
//               onClick={() => props.setTrigger(false)}
//             >
//               Cancel
//             </button>
//           </div>
//           {props.childern}
//         </div>
//       </div>
//     </>
//   ) : (
//     ''
//   )
// }

import React from 'react'
import './confirmation.css'
import InfoIcon from '@mui/icons-material/Info'
import { useNavigate } from 'react-router-dom'
export default function Deleteprofile(props) {
  const Navigate = useNavigate()

  return props.trigger ? (
    <>
      <div className='popup shadow-lg shadow-gray-400'>
        <div className='popup-inner ]'>
          <div className='deletetxt'>
            <span className='infoIcon'>
              <InfoIcon />
            </span>
            <span className='txt'>
              Are you sure you want to delete this account?
            </span>
          </div>
          <div className='class'>
            <button className='confirm-btn' onClick={() => Navigate('/delete')}>
              Confirm
            </button>
            <button
              className='close-btn'
              onClick={() => props.setTrigger(false)}
            >
              Cancel
            </button>
          </div>
          {props.childern}
        </div>
      </div>
    </>
  ) : (
    ''
  )
}
