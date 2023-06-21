import React from 'react'
import './list.css'
import { useNavigate } from 'react-router-dom'
function List(props) {
  return props.trigger ? (
    <>
      <div className='list relative'>
        <ul class='absolute right-20 my-100unlist w-40 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
          <li class=' cursor-pointer w-40 px-4 py-2 border-b rounded-t-lg border-1'>
            Edit
          </li>
          <li class=' cursor-pointer w-40 px-4 py-2 border-b  border-1'>
            Delete
          </li>
          <li class=' cursor-pointer w-40 px-4 py-2 border-b border-1'>
            Details
          </li>
          <li
            class=' cursor-pointer w-40 px-4 py-2 border-b border-1 bg-gray-100'
            onClick={() => props.setTrigger(false)}
          >
            cancel
          </li>
        </ul>
        {props.childern}
      </div>
    </>
  ) : (
    ''
  )
}
export default List
