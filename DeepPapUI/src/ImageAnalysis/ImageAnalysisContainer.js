import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageAnalysisResult from './ImageAnalysisResult';
import './ImageAnalysisContainer.css';
import { ToastContainer, toast } from 'react-toastify';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import auth from '../config/firebase-config';
import { storage } from '../config/firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useLocation } from 'react-router-dom';

const ImageAnalysisContainer = () => {

  const [analysisResult, setAnalysisResult] = useState('');
  const [dataURI, setdataURI] = useState('');
  const [isLoading , setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState('');
  const location = useLocation();

  
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
        setImageFile(image);
      }
  
      else{
        const err = await response.json();
        setIsModalOpen(false);
        setIsLoading(false);
        toast.error(err);
        setImageFile('');
      }
      
    } 
    catch (err) {
      toast.error(err.message);
      setImageFile('');
    }

  };

  const saveResult = async (e) => {

      setIsLoading(true);

      try {
        
        // Store image to firebase cloud storage
        const patientid = location.state;
        const path = `users/${auth.currentUser.uid}/patient_records/${patientid}`;
        const storageRef = ref(storage, path);

        const snapshot = await uploadBytes(storageRef, imageFile);
        const imageURL = await getDownloadURL(storageRef);
        const url = `http://localhost:4000/api/patient-records/${patientid}/screening-results?uid=${auth.currentUser.uid}`;

        const patient_record = `{
          "imageURL" : "${imageURL}",
          "resultDescription" : {
            "Cancer Classification" : "${analysisResult['Cancer Classification']}",
            "Cells Condition" : "${analysisResult['Cells Condition']}",
            "Cellular Change" : "${analysisResult['Cellular Change']}",
            "Probability of Classification" : "${analysisResult['Probability of Classification']}",
            "Date" : "${analysisResult['Date']}"
          }
        }`;

        
        // Save result to firebase firestore database by using the PatientRecordManagementApi
        const response = await fetch(url, {
            headers : {
              'Content-Type' : 'application/json'
            },
            method : "POST",
            body : patient_record
        });
        
        if(response.ok){    
          setIsLoading(false);
          toast.success("Result saved successfully!");
        }
    
        else{
          const err = await response.json();
          setIsLoading(false);
          toast.error(err);
        }  

      }  
      catch (error) {
          setIsLoading(false);
          toast.error(error.message);  
      }

      
  }

  const printResult = (e) => {
    window.print();
  }

  return (

    <>
      <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1}/>    
      <div className='image-analysis-container'>
        
        <div className='image-analysis-content'>
          <ImageUpload 
            onImageUpload={handleImageUpload} 
            setdataURI = {setdataURI} 
            dataURI={dataURI} 
            isLoading = {isLoading} 
            setIsLoading={setIsLoading} 
            isModalOpen = {isModalOpen}
            setIsModalOpen = {setIsModalOpen}
            setAnalysisResult = {setAnalysisResult}
            analysisResult={analysisResult}
          />

          <ImageAnalysisResult
          result={analysisResult} 
          dataURI={dataURI} 
          />
        </div>

        { analysisResult &&
          <div className='save-print-container'>
            <button className='btn btn-outline-primary' title='Save screening test result' onClick={ saveResult }>Save</button>
            <button className='btn btn-outline-primary' title='Print screening test result' onClick={ printResult }>Print</button>
          </div>
        }
        
      <ToastContainer/>
      
    </div>
    </>


    
    
  );
};

export default ImageAnalysisContainer;