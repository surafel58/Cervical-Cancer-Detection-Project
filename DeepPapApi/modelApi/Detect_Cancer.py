import numpy as np
import cv2
import PIL
import tensorflow as tf
import tensorflow_hub as hub

#Preprocess Input
def preProcessImage(image):

    img = PIL.Image.open(image)
    
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

    cancer_labels = ['High Squamous Intra-epithelial Lesion', 'Low Squamous Intra-epithelial Lesion', 
                 'Negative For Intraepithelial Malignancy', 'Squamous Cell Carcinoma']

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
      result_description["Cells Condition"] = "Cancerous"
    
    elif classification == 1:
      result_description["Cells Condition"] = "Pre-cancerous"
    
    else:
      result_description["Cells Condition"] = "Normal"

    #Define the Cellular Change
    result_description["Cellular Change"] = "Abnormal"

    if classification == 2:
      result_description["Cellular Change"] = "Normal"

    #Define Probability of classification
    result_description["Probability of Classification"] = "{:.2f}".format(probability) + " %"

    return result_description