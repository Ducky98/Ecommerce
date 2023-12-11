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




