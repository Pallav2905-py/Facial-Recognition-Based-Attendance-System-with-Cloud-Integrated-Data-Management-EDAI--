import cv2
from pre_process import prepare_training_data
import numpy as np

faces = []
labels = []
prepare_training_data()
face_recognizer = cv2.face.createEigenFaceRecognizer()

face_recognizer.train(faces, np.array(labels))