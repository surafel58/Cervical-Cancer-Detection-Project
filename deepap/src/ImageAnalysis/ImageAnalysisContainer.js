import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageAnalysisResult from './ImageAnalysisResult';
import './ImageAnalysisContainer.css';

const ImageAnalysisContainer = () => {

  const [analysisResult, setAnalysisResult] = useState('');
  const [dataURI, setdataURI] = useState('');
  const [isLoading , setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const handleImageUpload = (image) => {

    // TODO: Perform the analysis using the AI model or API and update the analysisResult state.
    // You will need to integrate with your specific AI model or API for the analysis.
    // Once you receive the result, update the analysisResult state using setAnalysisResult(result).

    var formData = new FormData();
    formData.append('file', image);
    setIsLoading(true);
  
    fetch("http://127.0.0.1:8000/predict", {
      method:"POST",
      body:formData
    })
    .then((result) => result.json())
    .then((result) => {
      setIsLoading(false);
      setAnalysisResult(result['result'])
    })
    .catch((err) => {
      setIsLoading(false);
      setIsError(true);
    })

  };

  return (

    <div className='image-analysis-container'>
      <ImageUpload onImageUpload={handleImageUpload} setdataURI = {setdataURI} dataURI={dataURI} isLoading = {isLoading} setIsLoading={setIsLoading} isError = {isError}/>
      <ImageAnalysisResult result={analysisResult} dataURI={dataURI} />
    </div>
    
  );
};

export default ImageAnalysisContainer;