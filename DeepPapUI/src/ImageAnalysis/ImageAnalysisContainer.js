import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageAnalysisResult from './ImageAnalysisResult';
import './ImageAnalysisContainer.css';
import { ToastContainer, toast } from 'react-toastify';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const ImageAnalysisContainer = () => {

  const [analysisResult, setAnalysisResult] = useState('');
  const [dataURI, setdataURI] = useState('');
  const [isLoading , setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleImageUpload = async (image) => {

    try {

      var formData = new FormData();
      formData.append('file', image);
      setIsLoading(true);
    
      const response = await fetch("http://127.0.0.1:8000/api/predict", {
        method:"POST",
        body:formData
      })
  
      if(response.ok){
  
        const result = await response.json();
  
        setIsModalOpen(false);
        setIsLoading(false);
        setAnalysisResult(result['result']);
        toast.success("Test Successful!")
      }
  
      else{
        const err = await response.json();
        setIsModalOpen(false);
        setIsLoading(false);
        toast.error(err);
      }
      
    } 
    catch (err) {
      toast.error(err.message);
    }

  };

  return (

    <>
      <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1}/>    
      <div className='image-analysis-container'>
      <ImageUpload 
        onImageUpload={handleImageUpload} 
        setdataURI = {setdataURI} 
        dataURI={dataURI} 
        isLoading = {isLoading} 
        setIsLoading={setIsLoading} 
        isModalOpen = {isModalOpen}
        setIsModalOpen = {setIsModalOpen}
      />

      <ImageAnalysisResult
       result={analysisResult} 
       dataURI={dataURI} 
      />

      <ToastContainer/>
      
    </div>
    </>


    
    
  );
};

export default ImageAnalysisContainer;