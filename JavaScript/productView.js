
/*-----------------------
    Increase &
    Decrease
-------------------------*/

function decreaseValue() {
    var inputBox = document.getElementById('qtyBox');
    var value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;
    value = value <= 1 ? 1 : value - 1;
    inputBox.value = value;
}

function increaseValue() {
    var inputBox = document.getElementById('qtyBox');
    var value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;
    value = value + 1;
    inputBox.value = value;
}





/*-----------------
      Main
------------------ */
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const clickedFile = urlParams.get('file');
        const clickedProductId = parseInt(urlParams.get('productId'));


        // console.log('Clicked File:', clickedFile);
        // console.log('Clicked Product ID:', clickedProductId);

        var fileBrowser = "data/json/women-ethnic.json"; // Default file

        switch (clickedFile) {
            case "womenEthnic":
                fileBrowser = "data/json/women-ethnic.json";
                break;
            case "womenWestern":
                fileBrowser = "data/json/woman-western.json";
                break;
            case "men":
                fileBrowser = "data/json/men.json";
                break;
            case "kids":
                fileBrowser = "data/json/kids.json";
                break;
            case "homeKitchen":
                fileBrowser = "data/json/home-kitchen.json";
                break;
            case "beautyHealth":
                fileBrowser = "data/json/beauty-health.json";
                break;
            case "jewelleryBeauty":
                fileBrowser = "data/json/jewellery-Beauty.json";
                break;
            case "bagsShoes":
                fileBrowser = "data/json/bags-Shoes.json";
                break;
            case "electr":
                fileBrowser = "data/json/electronics.json";
                break;
            default:
                fileBrowser = "data/json/women-ethnic.json";
                break;
        }

        const response = await fetch(fileBrowser);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log('Fetched Data:', data);

        const objectWithId = data.find(item => item.id === clickedProductId);
        const objectWithIdindex = data.findIndex(item => item.id === clickedProductId);
        // console.log(objectWithId)
        // console.log(objectWithIdindex)
        if (objectWithId) {
            // Json File's object found
            // console.log('Object found:', objectWithId);
            //Little bit maths
            function calculateDiscount(costPrice, sellingPrice) {
                const discount = ((costPrice - sellingPrice) / costPrice) * 100;
                return discount;
            }
            const price = objectWithId.price;
            const priceOff = objectWithId.price_off;
            let finalPrice;
            let discountedPrice;
            let discount;
            if (priceOff == null) {
                finalPrice = `₹${price}`;
                discountedPrice = "";
                discount = "";
            } else {
                finalPrice = `₹${priceOff}`;
                discountedPrice = `₹${price}`;
                discount = `${Math.ceil(calculateDiscount(price, priceOff))}% OFF`;
            }

            // console.log(`Original Price: ${discountedPrice} and after discount: ${finalPrice}, So you have total ${discount}`);

            const productDetailsContainer = document.getElementById('selectedProduct');
            productDetailsContainer.innerHTML = `
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img src="${objectWithId.image}" class="img-fluid h-50 rounded-3" alt="...">
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-6 col-12 product-description">
                            <div class="title">
                                ${objectWithId.title}
                            </div>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis cum nemo dolorem maiores est, iste reprehenderit impedit voluptas aliquid vero unde distinctio!</small>
                            <div class="price">
                                <span class="final">
                                ${finalPrice}
                                </span>
                                <span class="price-off">
                                ${discountedPrice}
                                </span>
                                <span class="discount">
                                ${discount}
                                </span>
                            </div>
                            <div class="p-3">

                                <div class="delivery">Free Delivery</div>
                                <div class="delivery">7 Days Replacement</div>
                                <div class="delivery">Secure</div>
                            </div>
                            <div class="qty">
                            <h5>Product Quantity :</h5>
                            <button onclick="decreaseValue()">-</button>
                            <input type="number" id="qtyBox" min="1" value="1">
                            <button onclick="increaseValue()">+</button>
                            </div>
                                <div class="row buy-product">
                                <div class="col-md-5 col-12 addCart"><i class="ri-shopping-cart-2-line"></i> Add to Cart</div>
                                <div class="col-md-2 col-12"></div>
                                <div class="col-md-5 col-12 buyNow" onclick="window.location.href='checkout.html?chkOt=${clickedFile}&pId=${objectWithIdindex}'"><i class="ri-arrow-right-double-line"></i> Buy Now</div>
                            </div>
                        
                        <div class="product-description-detail">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nesciunt odit quisquam aperiam suscipit facilis? Alias, animi. Perferendis eos necessitatibus earum labore dolorum maiores soluta impedit aspernatur aut optio accusamus nisi beatae rerum ab, molestiae dolores quis sunt. Assumenda repudiandae sint magni tempore fugiat ratione voluptatibus dolorem quos ipsam nulla, facere magnam corrupti doloribus molestiae, molestias quibusdam illum sapiente alias, ex quia? Deleniti quam modi labore enim nostrum rem dolore velit esse! Totam amet culpa illum magni corrupti ratione quam? Iste architecto odio nihil ipsam consequuntur fugiat quasi? Cum, odio!
                        </div>
                    </div>
                </div>
            `;

            // Get the addCartElement
            const addCartElement = document.querySelector('.addCart');

            // Attach event listener only once
            addCartElement.addEventListener('click', function () {
                appendToLocalStorage(objectWithId.image, finalPrice, objectWithId.title);
            });



            /*------------------------------
                    product for you
            *********************************/
            const productsContainer = document.querySelector('.productForYou');
            let n = objectWithIdindex + 1; // Starting point
            if (n == 40) { n = 0 };
            let count = 0;
            for (let i = n; count < 4; i = (i + 1) % 40) {
                // console.log(data[i])
                product = data[i];
                const productCard = document.createElement('div');
                productCard.classList.add('col-lg-3', 'col-md-6', 'col-12');

                //Little bit maths
                function calculateDiscount(costPrice, sellingPrice) {
                    const discount = ((costPrice - sellingPrice) / costPrice) * 100;
                    return discount;
                }
                const price = product.price;
                const priceOff = product.price_off;
                let finalPrice;
                let discountedPrice;
                let discount;
                // console.log(price,priceOff);
                if (priceOff == null) {
                    finalPrice = `₹${price}`;
                    discountedPrice = "";
                    discount = "";
                } else {
                    finalPrice = `₹${priceOff}`;
                    discountedPrice = `₹${price}`;
                    discount = `${Math.ceil(calculateDiscount(price, priceOff))}% OFF`;
                }

                //put inner html
                productCard.innerHTML = `
                    <a href="productView.html?file=${clickedFile}&productId=${product.id}" class="product-link">
                        <div class="card w-100">
                            <img src="${product.image}" class="card-img-top p-1" alt="Product Image">
                            <div class="card-body card-details">
                                <div class="countdown">ID: ${product.id}</div>
                                <div class="product-name">${product.title}</div>
                                <div class="product-price">
                                    <span class="final-price">${finalPrice}</span>
                                    <span class="price-off">${discountedPrice}</span>
                                    <span class="price-discount">${discount}</span>
                                </div>
                                <div class="rating-star">${product.rating}<i class="ri-star-fill"></i></div>
                            </div>
                        </div>
                    </a>
                `;

                productsContainer.appendChild(productCard)
                count++;
            }



        } else {
            console.log('Object not found');
        }
    } catch (error) {
        console.error('There was a problem:', error);
    }
});


function appendToLocalStorage(image, price, title) {
    var qtyBoxY = document.getElementById('qtyBox').value;
    const newData = {
        image: image,
        title: title,
        price: price,
        qty: qtyBoxY
    };

    let existingData = localStorage.getItem('productData');
    existingData = existingData ? JSON.parse(existingData) : [];

    existingData.push(newData);
    localStorage.setItem('productData', JSON.stringify(existingData));
    // console.log('Data has been appended to localStorage successfully!');
    location.reload()
}