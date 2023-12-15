$(document).ready(function () {
    $("#navigationPlaceholder").load("navHeader.html", function () {
        // Content is loaded, now retrieve product data and interact with #cartCheckout
        const productDetailsContainer = document.getElementById('cartCheckout');
        const storedData = localStorage.getItem('productData');

        if (storedData) {
            const parsedProducts = JSON.parse(storedData);
            let comPleteTotal = 0; // Initialize the total

            parsedProducts.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.classList.add('row', 'my-3');
                let amountWithoutSymbol = parseFloat(product.price.replace('₹', ''));
                productCard.innerHTML = `
                    <div class="col-lg-4 col-12 cart-img">
                        <img src="${product.image}" class="w-100 h-100" alt="">
                    </div>
                    <div class="col-lg-8 col-12">
                        <div class="cart-title">${product.title}</div>
                        <div class="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora odit voluptatum repudiandae quis perspiciatis non impedit quas sint modi enim suscipit totam nulla quidem vero. Id, aut exercitationem! Molestiae, distinctio. Delectus, molestiae?</div>
                        <div class="price">Price: <span>${product.price}</span></div>
                        <div class="price">Quantity: <span>${product.qty}</span></div>
                        <div class="price">Total: <span>₹${amountWithoutSymbol * product.qty}</span></div>
                    </div>
                `;
                comPleteTotal += amountWithoutSymbol * product.qty;
                productDetailsContainer.appendChild(productCard);
                
            });
            console.log(comPleteTotal); // This will display the total
            const chkOutTotal = document.getElementById('chkOutTotal');
                const chkOutTotalCard = document.createElement('div');
                chkOutTotalCard.classList.add('row', 'details', 'ms-2');
                chkOutTotalCard.innerHTML = `
                        <div class="row">
                            <div class="col-6">
                                Total:
                            </div>
                            <div class="col-6">
                                ₹${comPleteTotal}
                            </div>
                        </div>
            `;
                chkOutTotal.appendChild(chkOutTotalCard);
                const bought = document.createElement('div');
                bought.innerHTML = `
                <button id="bought" class="btn btn-primary my-3 w-100" onclick="window.location.href='bought.html',localStorage.removeItem('productData');                ">Buy</button>
            `;
                chkOutTotal.appendChild(bought);
        } else {
            console.log('No data found in local storage.');
        }
    });
});
