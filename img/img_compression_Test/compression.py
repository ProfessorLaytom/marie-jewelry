from pickletools import optimize
from PIL import Image
import PIL
import os
import glob

filename = 'frontimg2.png'
file = filename.split('.')
picture = Image.open(filename)
rgbpic = picture.convert('RGB')
print(f'dimension : ${picture.size}')
rgbpic.save('./compressed/'+file[0]+'.jpg', optimize=True, quality=75)