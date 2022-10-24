from copyreg import constructor
import csv
from cv2 import line
import jinja2
from numpy import product

''' generates html pages for each line in products.csv, and
creates the product pages, using product-template.html
Also generates a js file with a products object created from the
csv file for the filtering functionality on each listing page.'''

with open('./products.js', mode='w') as js:
    # we create a variable holding the js script in which
    # we declare the products array of objects.
    jsOutput = 'const products = [ \n'
    js.truncate(0)
    with open('products.csv', mode='r') as products:
        csv_reader = csv.reader(products, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names: {", ".join(row)}')
                keys = row
                print(keys)
                line_count += 1
            else:
                [id, dimension, material, size, stone, treatment, weight, name, price] = row
                output = f'{id}.html'
                subs = jinja2.Environment( 
                loader=jinja2.FileSystemLoader('./')).get_template('product_template.html').render(dimension=dimension, material=material, size=size, stone=stone, treatment=treatment, weight=weight, product_name = id, name=name, price=price) 
                with open(output, 'w') as f : 
                    f.truncate(0)
                    f.write(subs)
                #now we update the products array with a new object
                jsOutput += (f'{{\n {keys[0]}:"{id}", \n {keys[1]}:"{dimension}", \n {keys[2]}:"{material}", \n {keys[3]}:"{size}", \n {keys[4]}:"{stone}",\n {keys[5]}:"{treatment}", \n {keys[6]}:"{weight}", \n {keys[7]}:"{name}", \n {keys[8]}:"{price}" \n}}, \n')
        jsOutput += f'\n ] \n export default products'
        js.write(jsOutput)
        print(f'proccessed {line_count} lines.')