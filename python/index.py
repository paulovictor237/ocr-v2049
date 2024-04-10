import os
import cv2
import base64
import numpy as np
import pytesseract
from pdf2image import convert_from_bytes, convert_from_path

# https://www.robots.ox.ac.uk/~vgg/software/via/app/via_image_annotator.html
# sudo apt install -y tesseract-ocr tesseract-ocr-por
# config = '--tessdata-dir "/usr/share/tesseract-ocr/4.00/tessdata" --psm 1 -l por'
# config = "--tessdata-dir tessdata"

# Page segmentation modes (PSM)
# !tesseract --help-psm
# Page segmentation modes:
#   0    Orientation and script detection (OSD) only.
#   1    Automatic page segmentation with OSD.
#   2    Automatic page segmentation, but no OSD, or OCR.
#   3    Fully automatic page segmentation, but no OSD. (Default)
#   4    Assume a single column of text of variable sizes.
#   5    Assume a single uniform block of vertically aligned text.
#   6    Assume a single uniform block of text.
#   7    Treat the image as a single text line.
#   8    Treat the image as a single word.
#   9    Treat the image as a single word in a circle.
#  10    Treat the image as a single character.
#  11    Sparse text. Find as much text as possible in no particular order.
#  12    Sparse text with OSD.
#  13    Raw line. Treat the image as a single text line,
#        bypassing hacks that are Tesseract-specific.

def pdf_to_images(file_base64,file_mode = 'path' ):
    if file_mode == 'base64':
        image = base64.b64decode(file_base64)
        images = convert_from_bytes(image)
    else:
        images = convert_from_path(file_base64)
    image = np.array(images[0])
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)    
    return image


# file_path = './exemples/'
# for file_name in os.listdir(file_path):
#     if not file_name.endswith('.pdf'):continue
#     # image_base64 = pdf_to_base64(file_path+file_name)
#     image_base64 = file_path + file_name
#     image = pdf_to_images(image_base64)
#     text = pytesseract.image_to_string(image, lang='por', config='--psm 6')
#     print(text)

def add(a, b):
    return a + b

import sys
if __name__ == "__main__":
    print(add(int(sys.argv[1]), int(sys.argv[2])))
    image_base64 = './exemples/00_exemple.pdf'
    image = pdf_to_images(image_base64)
    text = pytesseract.image_to_string(image, lang='por', config='--psm 6')
    print(text)
 



