# E-commerce Website

This is an e-commerce website built with React, Node.js, Express, and MongoDB. It provides various features such as user authentication, shopping cart, wishlist, and more.

## Features

- User registration and login
- Product browsing and searching
- Product details and reviews
- Shopping cart functionality
- Wishlist management
- User profile management

## Technologies Used

- Frontend:
  - React
  - HTML/CSS
  - JavaScript

- Backend:
  - Node.js
  - Express.js

- Database:
  - MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tsowmi/E-Commerce-Website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install the dependencies for the backend:

   ```bash
   npm install
   ```

4. Navigate to the `client` directory and install the dependencies for the frontend:

   ```bash
   cd client
   npm install
   ```

5. Go back to the project root directory:

   ```bash
   cd ..
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

   This command will start the backend server as well as the frontend development server concurrently.

7. Open your browser and visit `http://localhost:3000` to access the website.

## Configuration

1. Create a `.env` file in the project root directory.

2. Add the following environment variables to the `.env` file:

   ```
   MONGO_URI=your-mongodb-connection-string
   SECRET_KEY=your-secret-key-for-jwt
   ```

   Replace `your-mongodb-connection-string` with your MongoDB connection string, and `your-secret-key-for-jwt` with a secret key of your choice for JSON Web Token (JWT) encryption.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please create an issue or submit a pull request.


