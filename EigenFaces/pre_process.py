import os
import cv2
import numpy as np
from detect_face import detect_face

def prepare_training_data(data_folder_path):
    dirs = os.listdir(data_folder_path)    
    #list to hold all subject faces
    faces = []
    #list to hold labels for all subjects
    labels = []
    
    #going through each directory and read images within it
    for dir_name in dirs:

        label = int(dir_name.replace("s", ""))
        subject_dir_path = data_folder_path + "/" + dir_name
        subject_images_names = os.listdir(subject_dir_path)
        
        for image_name in subject_images_names:
            
            #ignore system files like .DS_Store
            if image_name.startswith("."):
                continue;
            
            image_path = subject_dir_path + "/" + image_name

            #read image
            image = cv2.imread(image_path)
            
            print("Training on images")
            #detect face
            if image.all() != None:
                face, rect = detect_face(image)
            
            if face is not None:
                #add face to list of faces
                faces.append(face)
                #add label for this face
                labels.append(label)
    return faces, labels