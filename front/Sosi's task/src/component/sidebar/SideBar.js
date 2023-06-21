import React, { Fragment } from 'react'
import './sidebar.css'
import { SideBarData } from '../sidebarData/SideBarData'
import Navbar from '../navbar/Navbar'
//import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <>
     

      <div className='sideBar'>
        <ul className='SidebarList'>
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                className='flex bg-transparent'
                onClick={() => {
                  window.location.pathname = val.link
                }}
              >
                {' '}
                <div className='content'>
                  <span className='iconlist'>{val.icon}</span>{' '}
                  <span className='list'>{val.title}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default SideBar
