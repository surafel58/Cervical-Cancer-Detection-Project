
import './list.css';
import {useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function List(props) {
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

  // const navigate = useNavigate();
  return props.trigger ? (
    <>
      <div className='list relative' ref={listRef}>
        <ul className="list-group">
            <li class="list-group-item">Edit</li>
            <li class="list-group-item">Delete</li>
            <li class="list-group-item" onClick={()=>navigate('/patientdetail')}>Details</li>
            <li class="list-group-item" onClick={() => props.setTrigger(false)}>Cancel</li>
        </ul>

        {props.children}
      </div>
    </>
  ) : (
    ''
  );
}

export default List;
