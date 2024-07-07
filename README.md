# SecureReg 

### Video

https://github.com/IzzyDevOps/SecureReg/assets/147671694/ed1ea86c-ef4e-45ea-9737-0e8be946cf94

## Description

SecureReg Portal is a cutting-edge web-based platform designed to ensure safe user registration and authentication procedures. In today's digital landscape, maintaining user security is crucial to safeguarding sensitive information and preventing unauthorized access. SecureReg improves security by implementing robust password strength evaluation and CAPTCHA functionality. These features mitigate the risk of password-related vulnerabilities and prevent automated attacks by distinguishing between human users and bots. This README explores the design and implementation of these features, emphasizing their importance in securing user accounts and maintaining the platform's integrity.

### Key Features

* Password Strength Evaluation 

* Google reCAPTCHA

* OTP Verification

* Client-Server Architecture

## Frameworks

* HTML, CSS, JavaScript: Used for the frontend to create an interactive, dynamic user interface.

* Firebase: Provides backend services for authentication and data storage, leveraging strong encryption and authentication protocols.

## What I Learned

1. Enhanced Security Practices
2. Firebase Integration
3. User Experience

## Deployment
To deploy SecureReg Portal using Visual Studio Code, follow these detailed steps:

### Prerequisites
- Ensure you have Node.js and npm installed.
- Install the Firebase CLI: `npm install -g firebase-tools`
- Set up a Firebase project in the Firebase Console.

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/SecureReg.git
   cd SecureReg
   ```

2. **Open in Visual Studio Code**
   - Launch Visual Studio Code.
   - Open the project folder (`SecureReg`) in Visual Studio Code.

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Set Up Firebase**
   - In the Firebase Console, create a new project if you haven't already.
   - Initialize Firebase in your project:
     ```sh
     firebase init
     ```
     - Select **Hosting**.
     - Use the existing Firebase project.
     - Set `public` as the directory to deploy.
     - Configure as a single-page app (yes).
     - Do not overwrite `index.html`.

5. **Add Firebase Configuration**
   - In your project folder, locate `firebaseConfig.js` (or create one if it doesn't exist).
   - Add your Firebase project configuration:
     ```js
     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id",
       measurementId: "your-measurement-id"
     };
     firebase.initializeApp(firebaseConfig);
     ```

6. **Run the Application Locally**
   - To test the application locally, you can use a live server extension in Visual Studio Code or set up a simple HTTP server.
   ```sh
   npm install -g live-server
   live-server
   ```

7. **Deploy to Firebase**
   - Once you are satisfied with the local setup, deploy the application to Firebase:
     ```sh
     firebase deploy
     ```

### Registration
**File:** `index.html`
   - Navigate to the registration page of the application.
   - Fill out the registration form with the required details, including username, email address, and password.
   - Follow any prompts for password strength evaluation provided by the application.
   - Upon successful registration, you will receive a confirmation message.

### Login
**File:** `index.html`
   - Once registered, navigate to the login page.
   - Enter your registered email address and password.
   - Click on the login button to authenticate.

### Phone Number Verification
**File:** `verification.html`
   - After logging in, you may be prompted to input your phone number for additional verification.
   - Enter your phone number in the designated field.
   - Follow any instructions provided by the application to complete the verification process.

### CAPTCHA Verification
**File:** `verification.html`
   - During the registration or login process, you may encounter a CAPTCHA challenge to verify that you are a human user.
   - Complete the CAPTCHA challenge as instructed by the application.
   - Once verified, you will be granted access to the desired functionality.

### View Homepage
**File:** `home.html`
   - Upon successful authentication and verification, you will be redirected to the homepage or dashboard of the application.
   - Here, you can explore various features and functionalities available to authenticated users.

### Logout
**File:** `home.html`
   - To logout from the application, locate the logout button, usually found at the top right corner.
   - Click on the logout button to securely end your session and logout from the application.

## Author Info
Developed by **Kaone**, a passionate developer focused on enhancing web security through innovative solutions. For more projects and updates, follow me on [GitHub](https://github.com/IzzyDevOps) and [LinkedIn](https://www.linkedin.com/in/kaone-keboetseng).
