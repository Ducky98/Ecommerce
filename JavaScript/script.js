$(document).ready(function () {
    $("#navigationPlaceholder").load("navHeader.html", function() {
        // Now that content is loaded, retrieve product data and interact with #cartData
        const productContainer = document.getElementById('cartData');

        if (productContainer) {
            const storedData = localStorage.getItem('productData');

            if (storedData) {
                const parsedProducts = JSON.parse(storedData);
                

                if (parsedProducts && Array.isArray(parsedProducts) && parsedProducts.length > 0) {
                    parsedProducts.forEach((product, index) => {
                        const productDiv = document.createElement('div');
                        productDiv.classList.add('row', 'my-2');

                        productDiv.innerHTML = `
                            <div class="col-3 cart-img">
                                <img src="${product.image}" class="w-100 h-100" alt="">
                            </div>
                            <div class="col-7">
                                <div class="cart-title">${product.title}</div>
                                <div class="cart-qty">${product.price} X ${product.qty}</div>
                            </div>
                            <div class="col-1"><a href="#" class="remove-product" data-index="${index}">X</a></div>
                        `;

                        productContainer.appendChild(productDiv);
                    });

                    // Add event listener to 'x' links for product removal
                    productContainer.addEventListener('click', function(event) {
                        if (event.target.classList.contains('remove-product')) {
                            event.preventDefault();
                            const indexToRemove = parseInt(event.target.dataset.index);

                            // Remove the product from parsedProducts array
                            parsedProducts.splice(indexToRemove, 1);

                            // Update localStorage with the modified array
                            localStorage.setItem('productData', JSON.stringify(parsedProducts));

                            // Remove the product element from the cart view
                            event.target.closest('.row').remove();
                        }
                    });
                    
                } else {
                    const NoSelProduct = document.createElement('div');
                    NoSelProduct.classList.add('row', 'my-2',"mx-5");
                    NoSelProduct.innerHTML = "No Product Selected😔";
                    productContainer.appendChild(NoSelProduct);
                }
            } else {
                const NoSelProduct = document.createElement('div');
                    NoSelProduct.classList.add('row', 'my-2',"mx-5");
                    NoSelProduct.innerHTML = "No Product Selected😔";
                    productContainer.appendChild(NoSelProduct);
                console.log('No data found in local storage.');
                addClassToElement();
            }
        } else {
            console.log('The element with ID "cartData" was not found.');
        }
    });
});


function addClassToElement() {
    var element = document.getElementById("checOut");
    if (element.classList) {
      element.classList.add("disabled");
    } else {
      // For older browsers that don't support classList
      var classes = element.className.split(" ");
      if (classes.indexOf("newClass") === -1) {
        classes.push("newClass");
      }
      element.className = classes.join(" ");
    }
  }
  
  
  // Usage: Call the function with the element ID, storage key, and class to add  
// -------------------------------------------
// Side bar for Mobile screen sizes
// -------------------------------------------

function openNav() {
    document.getElementById('side-nav').style.width = '280px';
}
function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}


// Select the closebtn element
const closeBtn = document.querySelector('.closebtn');

// Add a click event listener to the closebtn
closeBtn.addEventListener('click', function () {
    // Select all elements with the class .collapse
    const collapses = document.querySelectorAll('.collapse');

    // Iterate through each collapse element and collapse it
    collapses.forEach(collapse => {
        collapse.classList.remove('show'); // Remove the 'show' class to collapse it
    });
    // Select all elements matching the selector
    const elements = document.querySelectorAll('.sidebar-collapse button.btn[aria-expanded="true"]');

    // Loop through each element and update the aria-expanded attribute
    elements.forEach(element => {
        element.setAttribute('aria-expanded', 'false');
    });

});

