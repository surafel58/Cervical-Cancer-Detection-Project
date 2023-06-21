import React from 'react'
import './patientrecord.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import {useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import List from './list/List'

function PatientRecord() {
   const [column,setColumn]  = useState([])
   const [records,setRecords] = useState([])
    const [patientPopup, setPatientPopup] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:3000/Data.json')
    .then(res => res.json())
    .then(data => {
      setColumn(Object.keys(data.users[0]))
      setRecords(data.users)
    })
  }, [])
  return (
    <>
      <div className=' p-4 w-full h-screen bg-slate-100'>
        <div class='input-group  bg-slate-100 '>
          <div class='form-outline'>
            <input
              type='search'
              id='form1'
              class='form-control hover:border-blue-400 hover:border-4  w-100'
              placeholder='Serach by Name'
            />
          </div>
          <button
            type='button'
            class='btn border bg-blue-400 hover:bg-blue-500'
          >
            <SearchIcon />
          </button>
        </div>
        <div className='tableconatiner shadow-lg shadow-gray-200 = '>
          <table className='table bg-slate-100   '>
            <thead className=''>
              <tr>
                {column.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <tr key={i}>
                  <td>{record.Id}</td>
                  <td>{record.Name}</td>
                  <td>{record.Age}</td>
                  <td>{record.Address}</td>
                  <td className='dot' onClick={() => setPatientPopup(true)}>
                    {record.Phone}{' '}
                    <span className='span'>
                      <MoreVertRoundedIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <List trigger={patientPopup} setTrigger={setPatientPopup}></List>
        </div>
        <div className='div bg-slate-100'>
          <a class='prev inline-flex items-center px-4 py-2 text-sm font-medium cursor-pointer text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Previous
          </a>

          <a class='next inline-flex items-center px-4 py-2 ml-3 text-sm font-medium cursor-pointer text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-blue- hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Next
          </a>
        </div>
      </div>
    </>
  )
}
export default PatientRecord
