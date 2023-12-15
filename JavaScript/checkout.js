document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Get the query parameters from the URL
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Retrieve the values
        const filename = urlParams.get('filename');
        const productId = urlParams.get('productId');
        const quantity = urlParams.get('quantity');

        // Use the values as needed
        console.log('Filename:', filename);
        console.log('Product ID:', productId);
        console.log('Quantity:', quantity);

        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log('Fetched Data:', data);

        const objectWithId = data.find(item => item.id.toString() === productId);
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
            let total;
            if (priceOff == null) {
                finalPrice = `₹${price}`;
                discountedPrice = "";
                discount = "";
                total = price * quantity;
            } else {
                finalPrice = `₹${priceOff}`;
                discountedPrice = `₹${price}`;
                discount = `${Math.ceil(calculateDiscount(price, priceOff))}% OFF`;
                total = `₹${priceOff * quantity}`;
            }

            // console.log(`Original Price: ${discountedPrice} and after discount: ${finalPrice}, So you have total ${discount}`);

            const productDetailsContainer = document.getElementById('chkOutContainer');
            const productCard = document.createElement('div');
            productCard.classList.add('row');
            productCard.innerHTML = `
            <div class="col-lg-4 col-12 cart-img">
                <img src="${objectWithId.image}" class="w-100 h-100" alt="">
            </div>
            <div class="col-lg-8 col-12 ">
                <div class="cart-title">${objectWithId.title}</div>
                <div class="detail">Lorem ipsum dolor sit amet consectetur adipisicing corporis provident tempora odit voluptatum repudiandae quis perspiciatis non impedit quas sint modi enim suscipit totam nulla quidem vero. Id, aut exercitationem! Molestiae, distinctio. Delectus, molestiae?</div>
            </div>
            `;
            productDetailsContainer.appendChild(productCard);




            const chkOutTotal = document.getElementById('chkOutTotal');
            const chkOutTotalCard = document.createElement('div');
            chkOutTotalCard.classList.add('row', 'details','ms-2');
            chkOutTotalCard.innerHTML = `
                        <div class="row">
                            <div class="col-6">
                                Product Price:
                            </div>
                            <div class="col-6">
                                ${finalPrice}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                Quantity:
                            </div>
                            <div class="col-6">
                                ${quantity}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                Total:
                            </div>
                            <div class="col-6">
                              ₹${total}
                            </div>
                        </div>
            `;
            chkOutTotal.appendChild(chkOutTotalCard);
            const bought = document.createElement('div');
            bought.innerHTML = `
                <button id="bought" class="btn btn-primary my-3 w-100" onclick="window.location.href='bought.html'">Buy</button>
            `;
            chkOutTotal.appendChild(bought);

        }
    } catch (error) {
        console.error('There was a problem:', error);
    }
});