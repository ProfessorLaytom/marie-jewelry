from pickletools import optimize
from PIL import Image
import PIL
import os
import glob

filename = 'frontimg2.png'
file = filename.split('.')
filename = file[0]
picture = Image.open(filename)
rgbpic = picture.convert('RGB') #to convert to jpg
print(f'dimension : ${picture.size}')
rgbpic.save('./compressed/'+filename+'.jpg', optimize=True, quality=75)