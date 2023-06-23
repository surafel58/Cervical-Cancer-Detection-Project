import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onImageUpload, setdataURI , dataURI, setIsLoading, isLoading, isError}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewImage(null); // Reset the preview image when closing the modal
    setIsLoading(false);
  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];
    setSelectedImage(file);

    // Preview the selected image
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
      setdataURI(reader.result);
      console.log(dataURI);
      
    };

    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {

    e.preventDefault();
    setIsModalOpen(false);

    const file = e.dataTransfer.files[0];
    setSelectedImage(file);

    // Preview the dropped image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
      setdataURI(reader.result);
    };

    reader.readAsDataURL(file);
  };
  
  const handleAnalysis = () => {
    onImageUpload(selectedImage)
  };
  
  return (

    <div className="image-upload-container">
        <h1 className='title'>Pap Smear Test Analysis</h1>
      <button onClick={openModal} className="upload-button">
        Upload Image
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>choose a file(image format)</h3>
            <div className="drop-zone" onDrop={handleDrop}>
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="preview-image" />
              ) : (
                <svg width = "4em" aria-hidden="true" className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              )}
            </div>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="file-input"
            />
            <button onClick={handleAnalysis} className="perform-analysis-button">
              Perform Analysis
            </button>
            { isLoading && <p>Loading ...</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
