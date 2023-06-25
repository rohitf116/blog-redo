Node.js Blog App
This repository contains a Node.js application for a blog system. The application uses Express.js as the web framework, MongoDB as the database, and includes routes and controllers for managing users and blogs.

Installation
To run this application locally, please follow these steps:

Clone the repository:

shell
Copy code
git clone <repository_url>
Navigate to the project directory:

shell
Copy code
cd blog
Install the dependencies:

shell
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables in the .env file:
MONGODB_URI: The MongoDB connection URI.
JWT_SECRET: The secret key used for JSON Web Token (JWT) authentication.
(Optional) PORT: The port number on which the server should run (default is 3000).
Start the application:

shell
Copy code
npm start
The application will be accessible at http://localhost:3000 (or the specified port).

Usage
Users API
POST /users/signup: Create a new user by signing up.
POST /users/signin: Sign in to the application.
Blogs API
GET /blogs: Get all blogs.
GET /blogs/:id: Get a blog by ID.
POST /blogs: Create a new blog (requires authentication).
PATCH /blogs/:id: Update a blog by ID (requires authentication and ownership).
DELETE /blogs/:id: Delete a blog by ID (requires authentication and ownership).
Note: Authentication is done using JSON Web Tokens (JWT). When signing up or signing in, a token will be returned in the response, which should be included in subsequent requests as a Bearer token in the Authorization header.

Folder Structure
The project follows a typical folder structure for a Node.js Express application:

src/controllers: Contains the controllers for handling requests and responses.
src/middlewares: Includes custom middleware functions for authentication and request validation.
src/models: Defines the Mongoose models for the application.
src/routes: Contains the route handlers for different API endpoints.
src/utils: Includes utility functions used throughout the application.
src/index.js: The entry point of the application.
Dependencies
The application relies on the following dependencies:

bcrypt: ^5.1.0
dotenv: ^16.3.1
express: ^4.18.2
joi: ^17.9.2
jsonwebtoken: ^9.0.0
mongoose: ^7.3.1
morgan: ^1.10.0
nodemon: ^2.0.22
These dependencies are automatically installed when running npm install.

Contribution
Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

License
This project is licensed under the ISC license. See the LICENSE file for more details.
