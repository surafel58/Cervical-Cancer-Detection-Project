import React from 'react';
import './ImageAnalysisResult.css'

const ImageAnalysisResult = ({ result, dataURI }) => {
  
  return (
    <div className="result-container">
      {result ? (
        <div className="card-content">
           <h2 className="no-result-heading">Result</h2>
            <img  className="resultimg" src= {`${dataURI}`} alt={`Cervical Image - ${result["Date"]}`} />
      
          <div className="a-result-info">
            <p><b>Cancer Classification:</b> {result["Cancer Classification"]}</p>
            <p><b>Cells Condition:</b> {result["Cells Condition"]}</p>
            <p><b>Cellular Change:</b> {result["Cellular Change"]}</p>
            <p><b>Probability of Classification:</b> {result["Probability of Classification"]}</p>
            <p><b>Date:</b> { result['Date'] } </p>
          </div>
        </div>

      ) : (

        <div>
          <div className="card-content">
            <h2 className="no-result-heading">Result</h2>
            <a href="https://via.placeholder.com/150" target="_blank" rel="noopener noreferrer">
              <img src= 'https://via.placeholder.com/150' alt = "Cervical Image" />
            </a>
            <div className="a-result-info">
                <h5 className="no-result-heading">No analysis result available.</h5>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default ImageAnalysisResult;
