import cv2
import numpy as np
from pre_process import prepare_training_data
from recognize_face import recognize_face
from connection import connect
from datetime import date, datetime


subjects=["","student1","pallav","vansh"]
email_dict = {
    "student1":"s1@vit.edu",
    "pallav":"pallav@vit.edu",
    "vansh":"vansh@vit.edu"
}
face_recognizer = cv2.face.EigenFaceRecognizer.create()
face_recognizer.read("main.xml")


vid = cv2.VideoCapture(0) 
name = []
while(True): 

    #? Use the below line to take Real-time video Feed
    ret, frame = vid.read()  
    #? Testing on a image  
    # frame = cv2.imread("Test-Data/Test_Image2.jpg")

    image, label_text = recognize_face(frame,face_recognizer,subjects)
    print(label_text)
    if image.all() != None:
        cv2.imshow('image',image)
    if label_text != "Unknown":
        if label_text not in name:
            name.append(label_text)
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break

print(name)


print("Connecting To DataBase")
client = connect("mongodb://localhost:27017/")
db = client["test"]
collection = db["kittens"]

date.today().strftime("%d/%m/%Y")
print(datetime.now().strftime("%H:%M:%S"))


for i in range(0,len(name)):
    input = {
    "date":date.today().strftime("%d/%m/%Y"),
    "email":email_dict.get(name[i]),
    "time":datetime.now().strftime("%H:%M:%S")
    }
    print(collection.insert_one(input))
# for names in 