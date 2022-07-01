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
                [ref, id, dimension, material, size, stone, treatment, weight] = row
                output = f'{id}.html'
                subs = jinja2.Environment( 
                loader=jinja2.FileSystemLoader('./')).get_template('product_template.html').render(ref=ref,dimension=dimension, material=material, size=size, stone=stone, treatment=treatment, weight=weight, product_name = id) 
                with open(output, 'w') as f : f.write(subs)
                #now we update the products array with a new object
                jsOutput += (f'{{\n {keys[0]}:"{ref}",\n {keys[1]}:"{id}", \n {keys[2]}:"{dimension}", \n {keys[3]}:"{material}", \n {keys[4]}:"{size}", \n {keys[5]}:"{stone}",\n {keys[6]}:"{treatment}", \n {keys[7]}:"{weight}" \n}},')
        jsOutput += f'\n ] \n export default products'
        js.write(jsOutput)
        print(f'proccessed {line_count} lines.')