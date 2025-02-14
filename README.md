User Authentication & Verification System

This project implements a robust user authentication and verification system with full responsiveness across all devices. It includes essential security features such as user registration, login, email verification, OTP-based password recovery, and password reset functionalities.

🚀 Features

User Registration

User Login

Email Verification

OTP Verification

Password Reset

API Integration

Fully Responsive Design

📱 Design Implementation

The application is designed to be fully responsive, ensuring seamless accessibility across all screen sizes, including mobile, tablet, and desktop devices.

🛠️ Issues Faced & Solutions

1. CORS Error on OTP Verification API

Problem: Encountered CORS issues when calling the verify OTP API.

Solution: Configured the backend server to allow proper CORS handling by setting appropriate headers.

2. Verification Code Resend Issue

Problem: The resend OTP feature was not functioning properly.

Solution: Updated API request headers and ensured correct email parsing to handle OTP resending effectively.

3. Full Name Not Adding During Registration

Problem: User's full name was not being stored in the database.

Solution: Fixed the API payload structure and ensured that fullName was correctly passed in the registration request.

📂 Project Structure

📦 project-root
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 services
 ┃ ┣ 📂 utils
 ┃ ┗ 📜 App.js
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┣ 📜 .gitignore

📦 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies:

npm install

Run the development server:

npm start

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT, OTP-based verification

🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

📜 License

This project is licensed under the MIT License.

