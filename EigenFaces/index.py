import cv2
import numpy as np
from pre_process import prepare_training_data
from recognize_face import recognize_face


subjects=["","s1","s2","s3"]
# faces,labels = prepare_training_data("Training-Data")

face_recognizer = cv2.face.EigenFaceRecognizer.create()
# face_recognizer.train(faces, np.array(labels))
# face_recognizer.write("main")
# face_recognizer.write("model")
face_recognizer.read("main")


vid = cv2.VideoCapture(0) 
while(True): 

    ret, frame = vid.read()    
    # frame = cv2.imread("Test-Data/Test_Image1.jpg")
    # frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    # cv2.imshow('frame', frame) 
    
    image = recognize_face(frame,face_recognizer,subjects)
    # if image.all() != None:
        # im = cv2.imread(image)

    if image.all() != None:
        cv2.imshow('image',image)

    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break

