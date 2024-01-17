import cv2
from pre_process import detect_face
from pre_process import prepare_training_data
import numpy as np
from Annotate_on_image import draw_rectangle, draw_text

def recognize_face(test_img,face_recognizer,subjects):
    # make a copy of the image as we don't want to chang original image
    img = test_img.copy()
    # detect face from the image
    face, rect = detect_face(img)

    # predict the image using our face recognizer
    if face.all != None:
        label, confidence = face_recognizer.predict(cv2.resize(face,(1600,1600)))

        print(label)
        print(confidence)
        # get name of respective label returned by face recognizer
    # check if the prediction confidence is within a certain threshold
        # assuming 0 means a perfect match, you can adjust this threshold as needed
        if confidence < 70000:  
            # ge name of the recognized label
            label_text = subjects[label]
        else:
            label_text = "Unknown"  # or handle this case as needed
        # draw a rectangle around face detected
        if rect.all() != None:
            draw_rectangle(img, rect)
            # draw name of predicted person
            draw_text(img, label_text, rect[0], rect[1] - 5)
        return img, None
    else:
        return test_img, label