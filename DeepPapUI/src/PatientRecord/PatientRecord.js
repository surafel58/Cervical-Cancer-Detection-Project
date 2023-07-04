import './patientrecord.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import List from './list/list';
import auth from '../config/firebase-config';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import { ToastContainer, toast } from 'react-toastify';

const PatientRecord = () => {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);
  const [patientPopup, setPatientPopup] = useState(false);
  const [filterRecords , setFilteredRecords]=useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [url, setURL] = useState(``);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPatientId, setCurrentPatientId] = useState(null);

  // auth.onAuthStateChanged((user) => {
  //   if(user)
  //     setURL(`http://localhost:4000/api/patient-records?uid=${auth.currentUser.uid}`);
    
  //     else
  //       setURL('');

  // })

  useEffect(() => {
    if(auth.currentUser){
     
      setIsLoading(true);

      fetch(`http://localhost:4000/api/patient-records?uid=${auth.currentUser.uid}`)
      .then((res) => res.json())
      .then((data) => {
        
        setIsLoading(false);
        setData(data);
        
        setColumn(Object.keys(data.data[0]));
        setRecords(data.data);
        console.log(data.data)

      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.message);
      })
    }
    
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
    <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1}/>  
    <ToastContainer/>  
    <div className='patientcontainer'>
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
                  <td>{record.address}</td>
                  <td>{record.phoneNumber}</td>
                  <td>{record.patientId}</td>
                  <td>{record.fullName}</td>
                  <td>{record.age}</td>
                  <td>{record.real_patient_id}</td>
                  <td><span className='dot' onClick={(e) => {
                    setCurrentPatientId(record.real_patient_id);
                    setPatientPopup(true);
                  }}>
                    <span className='material-symbols-outlined'>more_vert</span>
                  </span>
                  </td>
                  
                </tr>
              ))}
            </tbody>
            </table>

          <List trigger={patientPopup} setTrigger={setPatientPopup} data={data} setData={setData} currentPatientId = {currentPatientId} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
        <div className='next-page'>
          <a className='prev'><button type="button" className="btn btn-primary">&lt;Previous</button></a>
          <a className='next ml-3'><button type="button" className="btn btn-primary">Next &gt;</button></a>
        </div>
    </div>
    </>
  );
}

export default PatientRecord;
