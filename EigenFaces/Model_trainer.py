import cv2
import numpy as np
from pre_process import prepare_training_data
faces,labels = prepare_training_data("Training-Data")

face_recognizer = cv2.face.EigenFaceRecognizer.create()
face_recognizer.train(faces, np.array(labels))
face_recognizer.write("main")