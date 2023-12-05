// Function to check if the user is logged in 
function isLoggedIn() {
    
    return  true/* true or false based on login status */;
}

// Function to set the username based on login status
function setUsername() {
    const usernameElement = document.getElementById('username');

    if (isLoggedIn()) {
        // Replace 'John Doe' with the actual username fetched after login
        usernameElement.textContent = 'John Doe'; // Set logged-in username
    } else {
        usernameElement.textContent = 'User'; // Set default text if not logged in
    }
}

// Call the function to set the username when the page loads
document.addEventListener('DOMContentLoaded', function() {
    setUsername();
});