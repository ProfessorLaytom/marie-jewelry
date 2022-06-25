import csv
from cv2 import line
import jinja2
from numpy import product

with open('products.csv', mode='r') as products:
    csv_reader = csv.reader(products, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names: {", ".join(row)}')
            line_count += 1
        else:
            [ref, id, dimension, material, size, stone, treatment, weight] = row
            output = f'{id}.html'
            subs = jinja2.Environment( 
            loader=jinja2.FileSystemLoader('./')).get_template('product_template.html').render(ref=ref,dimension=dimension, material=material, size=size, stone=stone, treatment=treatment, weight=weight, product_name = id) 
            with open(output, 'w') as f : f.write(subs)
    print(f'proccessed {line_count} lines.')