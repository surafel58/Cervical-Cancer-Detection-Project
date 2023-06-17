import pathlib
import numpy as np
import cv2
import os
import PIL
import tensorflow as tf

#Preprocess Input
def preProcessImage(image_path):

    img = PIL.Image.open(image_path)
    img = np.array(img)
    
    input_shape = (224,224)
    
    img = cv2.resize(img, input_shape)
    img = img / 255
    
    return img

#Display Output
def displayOutput(model_path, img):
    
    #load model 
    model = tf.keras.models.load_model(
       (model_path),
       custom_objects={'KerasLayer': hub.KerasLayer}
    )

    cancer_labels = ['High squamous intra-epithelial lesion', 'Low squamous intra-epithelial lesion', 
                 'Negative for Intraepithelial malignancy', 'Squamous cell carcinoma']

    #Predict
    img = img.reshape((1, 224, 224, 3))
    classification = model.predict(img)
   
    probability = classification * 100
    probability = np.max(probability)
    classification = np.argmax(classification)
    
    result_description = dict()
    
    #Define the Cancer Classification
    label = cancer_labels[classification]
    result_description["Cancer Classification"] = label 
    
    #Define the Cells Condition : cancerous, pre-cancerous, normal 
    if classification == 0 or classification == 3:
      result_description["Cells condition"] = "Cancerous"
    
    elif classification == 1:
      result_description["Cells condition"] = "Pre-cancerous"
    
    else:
      result_description["Cells condition"] = "Normal"

    #Define the Cellular Change
    result_description["Cellular Change"] = "Abnormal"

    if classification == 2:
      result_description["Cellular Change"] = "Normal"

    #Define Probability of classification
    result_description["probability of classification"] = "{:.2f}".format(probability) + " %"

    return result_description

#Display image
def displayImage(image_path):
  image_path = pathlib.Path(image_path)
  img = PIL.Image.open(image_path)
  return img


img = preProcessImage("/content/drive/MyDrive/Cervical Cancer dataset (Mendeley LBC)/Squamous cell carcinoma/scc_1 (11).jpg")
displayOutput("/content/drive/MyDrive/Cervical Cancer dataset (Mendeley LBC)/My model testing Folder /98_model.h5", img)
