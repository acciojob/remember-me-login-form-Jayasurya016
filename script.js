//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');
    const existingUserBtn = document.getElementById('existing');

    // Function to check for saved credentials and show/hide the button
    function checkSavedCredentials() {
        if (localStorage.getItem('savedUsername')) {
            existingUserBtn.style.display = 'block';
        } else {
            existingUserBtn.style.display = 'none';
        }
    }

    // Initial check on page load
    checkSavedCredentials();

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password);
        } else {
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
        }

        checkSavedCredentials();
    });

    // Handle existing user login
    existingUserBtn.addEventListener('click', () => {
        const savedUsername = localStorage.getItem('savedUsername');
        alert(`Logged in as ${savedUsername}`);
    });
});