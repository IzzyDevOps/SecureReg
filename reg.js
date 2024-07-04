// Get reference to the login button and reCAPTCHA widget
const loginBtn = document.getElementById('loginBtn');
const recaptchaWidget = document.querySelector('.g-recaptcha');

// Function to validate the reCAPTCHA response
function validateRecaptcha() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
        // If the response is empty, reCAPTCHA is not solved yet
        alert('Please complete the reCAPTCHA!');
        return false;
    } else {
        // reCAPTCHA solved, return true
        return true;
    }
}

// Function to close the window after 10 seconds if reCAPTCHA is not solved
function closeWindow() {
    setTimeout(() => {
        if (!validateRecaptcha()) {
            alert('You have not completed the reCAPTCHA. Window will close in 3 seconds.');
            setTimeout(() => {
                window.close();
            }, 3000);
        }
    }, 10000); // 10 seconds timeout
}

// Password strength checker
const passwordInput = document.getElementById('loginPassword');
const strengthIndicator = document.querySelector('.strength');
const strengthBar = document.querySelector('.indicator');

const colors = ['#ff0000', '#ffe100', '#0bd600'];
const texts = ['weak', 'medium', 'strong'];

function checker(width, text, background, color) {
    strengthBar.style.width = width;
    strengthBar.style.background = background;
    strengthIndicator.innerText = text; 
    strengthIndicator.style.color = color;
}

// Password strength checker for registration password input
const registerPasswordInput = document.getElementById('password');

registerPasswordInput.addEventListener('input', () => {
    const passwordLength = registerPasswordInput.value.length;
    if (passwordLength <= 2) {
        checker(`${100 / 3}%`, texts[0], colors[0], colors[0]);
    } else if (passwordLength <= 5) {
        checker(`${100 / 2}%`, texts[1], colors[1], colors[1]);
    } else if (passwordLength >= 6) {
        checker(`${100 / 1}%`, texts[2], colors[2], colors[2]);
    }
});

// Add click event listener to login button
loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate reCAPTCHA response before proceeding with login
    if (!validateRecaptcha()) {
        return; // Stop further execution if reCAPTCHA validation fails
    }

    // Start the close window timer
    closeWindow();

    // Get user input
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Redirect to the OTP HTML file with email and password as URL parameters
    window.location.href = `otp.html?email=${email}&password=${password}`;
});

// Function to execute when reCAPTCHA is solved
function recaptchaSolved() {
    // Start the close window timer
    closeWindow();
}

// Function to execute when reCAPTCHA is expired
function recaptchaExpired() {
    // Stop the close window timer if it was started
    clearTimeout(closeWindow);
}

function togglePasswordVisibility(passwordId, eyeIcon) {
    const passwordInput = document.getElementById(passwordId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.backgroundImage = "url('eye-closed-icon.png')"; // Update to the closed eye icon image
    } else {
        passwordInput.type = "password";
        eyeIcon.style.backgroundImage = "url('eye-icon.png')"; // Update to the open eye icon image
    }
}
