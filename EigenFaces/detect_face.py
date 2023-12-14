import cv2
import os
import numpy as np
from Annotate_on_image import draw_rectangle

def detect_face(img):
    #convert the test image to gray image as opencv face detector expects gray images
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    #load OpenCV face detector, I am using LBP which is fast
    #there is also a more accurate but slow Haar classifier
    face_cascade = cv2.CascadeClassifier('opencv-files/haarcascade_frontalface_alt.xml')
    #let's detect multiscale (some images may be closer to camera than others) images
    #result is a list of faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5);
    #if no faces are detected then return original img
    if (len(faces) != 0):
        #under the assumption that there will be only one face,
        #extract the face area
        (x, y, w, h) = faces[0]
        #return only the Greyscale face part of the image  
        draw_rectangle(gray,(x,y,w,h))
        # cropped_image = gray[y:y+w, x:x+h]
        # cv2.imshow("output",c ropped_image)
        return cv2.resize(gray[y : y + w, x : x + h],(1600,1600)), faces[0]
    else:
        return cv2.resize(gray,(1600,1600)), np.empty(5, dtype=object)