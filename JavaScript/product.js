/*--------------------------
     Get the query parameters from the URL
--------------------------*/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const message = urlParams.get('product');
var fileBrowser;
switch (message) {
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



document.addEventListener('DOMContentLoaded', () => {
  // Code within this block executes when the DOM content is fully loaded
  // Get the container where products will be displayed
  const productsContainer = document.querySelector('.products-container');

  fetch(fileBrowser).then(response => response.json()).then(products => { // Parse the response as JSONs
    let row;
    products.forEach((product, index) => {
      if (index % 4 === 0) {
        row = document.createElement('div');
        row.classList.add('row', 'my-3');
        productsContainer.appendChild(row);
      }

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
          <a href="productView.html?file=${message}&productId=${product.id}" class="product-link">
            <div class="card w-100 productDisplay">
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

      row.appendChild(productCard);
    });
  })
    .catch(error => console.log(error));
});

/**
 * Toggle Button Functionality
 * 
 * This code adds toggle functionality to a button when clicked. 
 * It toggles the 'active' class on the button, changing its appearance.
 */
function toggleColor(elementId) {
  const button = document.getElementById(elementId);
  let isActive = false;

  button.addEventListener('click', function () {
    isActive = !isActive; // Toggle the state

    if (isActive) {
      button.classList.add('filerActive'); // Apply the 'active' class
    } else {
      button.classList.remove('filerActive'); // Remove the 'active' class
    }
  });
}

// Apply the toggle functionality to male and female filter buttons
toggleColor('maleFilter');
toggleColor('fmaleFilter');

/***********
 * Generate size Filter
 * I dont wanna code same thing again and again
 */
const sizeFilterContainer = document.querySelector('#SizeFilter');

for (let i = 24; i <= 48; i += 2) {
  const div = document.createElement('div');
  div.classList.add('form-check', 'mb-2');

  const input = document.createElement('input');
  input.classList.add('form-check-input');
  input.type = 'radio';
  input.name = 'size';
  input.value = i;
  input.id = `size${i}`;

  const label = document.createElement('label');
  label.classList.add('form-check-label', 'ps-2');
  label.setAttribute('for', `size${i}`);
  label.textContent = i;

  div.appendChild(input);
  div.appendChild(label);
  sizeFilterContainer.appendChild(div);
}
/***************
 * now for Fabric filter
 *******************/
const fabricFilterContainer = document.querySelector('#fabricFilter');
for (let i = 1; i < 11; i++) {

  // <div class="form-check mb-2">
  //   <input class="form-check-input" type="checkbox" value=""
  //     id="filterf1">
  //     <label class="form-check-label ps-2" for="filterf1">
  //       Filter 1
  //     </label>
  // </div>
  const div = document.createElement('div');
  div.classList.add('form-check', 'mb-2');

  const input = document.createElement('input');
  input.classList.add('form-check-input');
  input.type = "checkbox";
  input.id = `filterFiber${i}`;

  const label = document.createElement('label');
  label.classList.add('form-check-label', 'ps-2');
  label.setAttribute('for', `filterFiber${i}`);
  label.textContent = `Filter ${i}`;

  div.appendChild(input);
  div.appendChild(label);
  fabricFilterContainer.appendChild(div);
}


/************ 
 * worrenty generator
 * doing it by js buz i am lazy
 */
let warrantyList = ['1 Month', '3 Months', '6 Months', '1 Year', '2 Years'];
const warrantyFilterContainer = document.querySelector('#warrantyFilter');

let idGen = 1;
warrantyList.forEach(function (wtTime) {
  const button = document.createElement('button');
  button.classList.add('genderFilt', 'mx-1');
  button.id = `warrantyFilter${idGen}`;
  idGen++;
  button.textContent = wtTime;

  warrantyFilterContainer.appendChild(button);
});
toggleColor('warrantyFilter1');
toggleColor('warrantyFilter2');
toggleColor('warrantyFilter3');
toggleColor('warrantyFilter4');
toggleColor('warrantyFilter5');