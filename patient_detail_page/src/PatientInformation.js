import React, { useState } from 'react';


const PatientInformation = () => {
    const [patient, setPatient] = useState({
      id: "123456",
      name: "John Doe",
      address: "123 Main St, Anytown",
      age: 35,
      screeningResults: [
        {
          date: "2022-01-01",
          classification: "HSIL",
          cellCondition: "Cancerous",
          cellularChange: "Abnormal",
          probability: 98.23,
          image: "path/to/image1.jpg"
        },
        {
          date: "2021-06-01",
          classification: "LSIL",
          cellCondition: "Precancerous",
          cellularChange: "Normal",
          probability: 75.12,
          image: "path/to/image2.jpg"
        },
        {
          date: "2020-12-15",
          classification: "NSIL",
          cellCondition: "Normal",
          cellularChange: "Normal",
          probability: 91.87,
          image: "path/to/image3.jpg"
        },
        {
            date: "2023-06-15",
            classification: "NSIL",
            cellCondition: "Normal",
            cellularChange: "Normal",
            probability: 91.87,
            image: "path/to/image4.jpg"
          },
          {
            date: "2020-12-15",
            classification: "SCC",
            cellCondition: "Cancerous",
            cellularChange: "Abnormal",
            probability: 86.87,
            image: "path/to/image5.jpg"
          },
          {
            date: "2020-12-15",
            classification: "LSIL",
            cellCondition: "precancerous",
            cellularChange: "Abnormal",
            probability: 95.87,
            image: "path/to/image6.jpg"
          }
      ]
    });
  
    const deleteScreeningResult = (index) => {
      // Ask for confirmation before deleting a screening result
      if (window.confirm('Are you sure you want to delete this screening result?')) {
        setPatient((prevPatient) => {
          const updatedResults = [...prevPatient.screeningResults];
          updatedResults.splice(index, 1);
          return { ...prevPatient, screeningResults: updatedResults };
        });
      }
    };
  
    return (
      <div>        
  
        <h1><b>Patient Detail</b></h1>
        
        {/* Patient information table */}
        <div className='tableContainer'>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123456</td>
                <td>John Doe</td>
                <td>123 Main St, Anytown</td>
                <td>35</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <h2>Cervical Cancer Screening Results</h2>
  
        {/* Screening results container */}
        <div className="screening-results-container">
          {patient.screeningResults.map((result, index) => (
            // Screening result card
            <div className="card-content">
              <a href="https://via.placeholder.com/150" target="_blank" rel="noopener noreferrer">
                <img src="https://via.placeholder.com/150" alt={`Cervical Image - ${result.date}`} />
              </a>
              <div className="result-info">
                <p><b>Date:</b> {result.date}</p>
                <p><b>Classification:</b> {result.classification}</p>
                <p><b>Cell Condition:</b> {result.cellCondition}</p>
                <p><b>Cellular Change:</b> {result.cellularChange}</p>
                <p><b>Probability:</b> {result.probability}%</p>
              </div>
              {/* Delete button */}
              <span className="delete-button" onClick={() => deleteScreeningResult(index)}>
                <i className="fas fa-trash"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PatientInformation;
