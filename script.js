// ------------------------------------------
//      Pre-loaders
//-----------------------------------------------
$(document).ready(function(){
    $("#navigationPlaceholder").load("navHeader.html");
});



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


/*---------------------------
        Multi slider
----------------------------*/





// -------------------------------------------
// .header-nav nav-banner hover show and hide
// -------------------------------------------

// let timeout;
// let isBannerHovered = false;

// // Function to hide all banners
// function hideAllBanners() {
//     const banners = document.querySelectorAll('.nav-banner');
//     banners.forEach(banner => {
//         banner.style.opacity = '0';
//         banner.style.visibility = 'hidden';
//     });
// }

// // Function to show the corresponding banner on hover
// function showBanner(bannerId) {
//     clearTimeout(timeout);
//     hideAllBanners();

//     const banner = document.getElementById(bannerId);
//     if (banner) {
//         banner.style.opacity = '1';
//         banner.style.visibility = 'visible';
//     }
// }

// // Function to hide the banner when mouse leaves the element after a delay
// function hideBanner(bannerId) {
//     if (!isBannerHovered) {
//         timeout = setTimeout(() => {
//             const banner = document.getElementById(bannerId);
//             if (banner) {
//                 banner.style.opacity = '0';
//                 banner.style.visibility = 'hidden';
//             }
//         }, 300); // Adjust this delay (in milliseconds) as needed
//     }
// }

// // IDs of elements and corresponding banner IDs
// const elementBannerMap = {
//     'woman-ethnic': 'woman-ethnic-banner',
//     'woman-western': 'woman-western-banner',
//     'men': 'men-banner',
//     'kids': 'kids-banner',
//     'home': 'home-banner',
//     'beauty': 'beauty-banner',
//     'jewellery': 'jewellery-banner',
//     'bags': 'bags-banner',
//     'electronics': 'electronics-banner'
// };

// // Event listeners for hover on different elements
// Object.keys(elementBannerMap).forEach(elementId => {
//     const bannerId = elementBannerMap[elementId];
//     const element = document.getElementById(elementId);
//     const banner = document.getElementById(bannerId);

//     if (banner) {
//         banner.addEventListener('mouseover', function () {
//             isBannerHovered = true;
//         });

//         banner.addEventListener('mouseout', function () {
//             isBannerHovered = false;
//             hideBanner(bannerId);
//         });
//     }

//     if (element) {
//         element.addEventListener('mouseover', function () {
//             isBannerHovered = true;
//             showBanner(bannerId);
//         });

//         element.addEventListener('mouseout', function (e) {
//             isBannerHovered = false;
//             // Check if the mouse has actually left the element and its children
//             const isMouseOutside = !e.relatedTarget || !element.contains(e.relatedTarget);
//             if (isMouseOutside) {
//                 hideBanner(bannerId);
//             }
//         });
//     }
// });

// // Hide all banners by default
// hideAllBanners();




// // -------------------------------------------
// // Side bar for Mobile screen sizes
// // -------------------------------------------
// document.addEventListener('DOMContentLoaded', function () {
//     const bannerItems = document.querySelectorAll('.banner-item');
//     const bannerButtonContainer = document.getElementById('banner-buttons');

//     bannerItems.forEach((item, index) => {
//         const listItemText = item.querySelector('span').textContent.trim();
//         const listTitle = item.querySelector('.list-title');
//         const subListItems = listTitle.nextElementSibling.querySelectorAll('.sub-list-item');

//         // Create collapsible button
//         const collapsibleBtn = document.createElement('button');
//         collapsibleBtn.className = 'btn btn-toggle align-items-center rounded collapsed';
//         collapsibleBtn.setAttribute('data-bs-toggle', 'collapse');
//         collapsibleBtn.setAttribute('data-bs-target', `#collapse-${index}`);
//         collapsibleBtn.setAttribute('aria-expanded', 'false');
//         collapsibleBtn.textContent = listItemText;

//         // Create collapsible content
//         const collapsibleContent = document.createElement('div');
//         collapsibleContent.className = 'collapse';
//         collapsibleContent.id = `collapse-${index}`;

//         // Add sub-list items to collapsible content
//         subListItems.forEach(subItem => {
//             const clonedSubItem = subItem.cloneNode(true);
//             collapsibleContent.appendChild(clonedSubItem);
//         });

//         // Create list item to contain button and collapsible content
//         const listItemElement = document.createElement('li');
//         listItemElement.appendChild(collapsibleBtn);
//         listItemElement.appendChild(collapsibleContent);

//         // Append the new list item to the sidebar list
//         bannerButtonContainer.appendChild(listItemElement);
//     });
// });









