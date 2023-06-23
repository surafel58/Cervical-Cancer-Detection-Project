import './patientrecord.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import List from './list/list';

const PatientRecord = () => {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);
  const [patientPopup, setPatientPopup] = useState(false);
  const [filterRecords , setFilteredRecords]=useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/Data.json')
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data.users[0]));
        setRecords(data.users);
      });
  }, []);

  //
  useEffect(() => {
    const filterRecords = () => {
      if (searchValue.trim() === '') {
        setFilteredRecords(records);
      } else {
        const filtered = records.filter(
          (record) =>
            record.Id.includes(searchValue) ||
            record.Name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredRecords(filtered);
      }
    };

    filterRecords();
  }, [searchValue, records]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <>
      <div className='p-4'>
        <div className='input-group'>
          <div className='form-outline'>
            <input
              type='search'
              id='form1'
              className='form-control'
              placeholder='Search by Name or ID'
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          
          <span className="material-symbols-outlined">
            search
            </span>
          
        </div>

          {/* NEW TABLE */}
            <table className="table mt-5">
            
            <thead className="thead-dark">
                <tr>
                {column.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {filterRecords.map((record, i) => (
                <tr key={i}>
                  <td>{record.Id}</td>
                  <td>{record.Name}</td>
                  <td>{record.Age}</td>
                  <td>{record.Address}</td>
                  <td>{record.Phone}
                  <span className='dot' onClick={() => setPatientPopup(true)}>
                    <span className='material-symbols-outlined'>more_vert</span>
                  </span>
                  </td>
                  
                </tr>
              ))}
            </tbody>
            </table>

          <List trigger={patientPopup} setTrigger={setPatientPopup} />
        </div>
        <div className='next-page'>
          <a className='prev'><button type="button" className="btn btn-primary">&lt;Previous</button></a>
          <a className='next ml-3'><button type="button" className="btn btn-primary">Next &gt;</button></a>
        </div>
    </>
  );
}

export default PatientRecord;
