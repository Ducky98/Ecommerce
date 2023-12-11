import os
import random
import json

folder = 'Python Generated'
# Check if the folder already exists
if not os.path.exists(folder):
    os.makedirs(folder)
else:
    # If folder already exists, find a unique name by adding (2), (3), etc.
    i = 2
    while os.path.exists(f"{folder} {i}"):
        i += 1
    folder = f"{folder} {i}"
    os.makedirs(folder)


# Dict with key as Image folder and value as json file which will be generated
productDict = {
    "women-ethnic"      : "women-ethnic",
    "woman-western"     : "woman-western",
    "men"               : "men",
    "kids"              : "kids",
    "jewellery-Beauty"  : "jewellery-Beauty",
    "homeKitchen"       : "home-kitchen",
    "electronics"       : "electronics",
    "beauty-health"     : "beauty-health",
    "bags-Shoes"        : "bags-Shoes"
}

productKeyID = 10000
for key, value in productDict.items():

    products = []

    for i in range(1, 41):  #make total 40 json object
        price = random.randint(200, 4000)   #price setting
        rating = round(random.uniform(2.5, 5.0), 1) #rating setting
        discount = random.randint(25, 60) if random.random() < 0.4 else 0  # 40% chance of discount
        product = {
            "image": f"Images/products/{key}/img ({i}).webp",
            "title": f"{key} {i}",
            "price": price,
            "price_off": round(price * discount / 100) if discount else None,
            "rating": rating,
            "id" : productKeyID
        }
        productKeyID += 1
        products.append(product)



    file_path = f"{folder}/{value}.json"
    # Writing products to a JSON file
    with open(file_path, 'w') as outfile:
        json.dump(products, outfile, indent=4)

    # Open the folder in the file explorer
if os.path.exists(folder):
    os.system(f'explorer {os.path.realpath(folder)}')