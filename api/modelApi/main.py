from fastapi import FastAPI, File, UploadFile, status, Response
from PIL import Image, UnidentifiedImageError
from fastapi.middleware.cors import CORSMiddleware

# import custom script to detect cervical cancer
from Detect_Cancer import displayOutput, preProcessImage
from datetime import datetime

app = FastAPI()

# Add CORS middleware with all origins allowed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def create_upload_file(file: UploadFile, response: Response):

    try:
    
        image = preProcessImage(file.file)
        predicted_result = displayOutput('./Cancer_Detection_Model.h5', image)

        predicted_result['Date'] = datetime.now().strftime("%d-%m-%Y %H:%M:%S")

        return { "result" : predicted_result }

    except UnidentifiedImageError:
        return {"Expected file type is Image file!!!"}
    
    except:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"Somethng went wrong!!!"}

