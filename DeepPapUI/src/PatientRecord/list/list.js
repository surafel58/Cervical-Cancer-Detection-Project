
import './list.css';
import {useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import auth from '../../config/firebase-config';

const List = (props) => {
  const navigate = useNavigate();
  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        props.setTrigger(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props]);

  const editHandler = async (e) => {
    

  }

  const deleteHandler = async (e) => {

    props.setIsLoading(true);
  try
  {
    const patientid = props.currentPatientId;
    const url = `http://localhost:4000/api/patient-records/${patientid}?uid=${auth.currentUser.uid}`;
    
    const response = await fetch(url, {
        method : "DELETE"
    });
    
    if(response.ok){    
      props.setIsLoading(false);
      toast.success("Patient record deleted successfully!");
    }

    else{
      const err = await response.json();
      props.setIsLoading(false);
      toast.error(err);
    }  
  } 
  catch (error) {
      props.setIsLoading(false);
      toast.error(error.message);  
  }

  }

  return props.trigger ? (
    <>
      <div className='list relative' ref={listRef}>
        <ul className="list-group">
            <li className="list-group-item" onClick={editHandler}>Edit</li>
            <li className="list-group-item" onClick={deleteHandler}>Delete</li>
            <li className="list-group-item" onClick={()=>navigate('/patientdetail')}>Details</li>
            <li className="list-group-item" onClick={() => props.setTrigger(false)}>Cancel</li>
        </ul>

        {props.children}
      </div>
    </>
  ) : (
    ''
  );
}

export default List;
