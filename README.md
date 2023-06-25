<!DOCTYPE html>
<html lang="en">

<body>
  <h1>Node.js Blog App</h1>

  <h2>Usage</h2>

  <h3>Users API</h3>
  <ul>
    <li>
      <strong>Sign Up</strong> - <code>POST /users/signup</code><br>
      Creates a new user by signing up.
    </li>
    <li>
      <strong>Sign In</strong> - <code>POST /users/signin</code><br>
      Allows users to sign in to the application.
    </li>
  </ul>

  <h3>Blogs API</h3>
  <ul>
    <li>
      <strong>Get All Blogs</strong> - <code>GET /blogs</code><br>
      Retrieves all blogs from the database.
    </li>
    <li>
      <strong>Get Blog by ID</strong> - <code>GET /blogs/:id</code><br>
      Retrieves a specific blog by its ID.
    </li>
    <li>
      <strong>Create Blog</strong> - <code>POST /blogs</code><br>
      Creates a new blog. Requires authentication using a valid JWT.
    </li>
    <li>
      <strong>Update Blog</strong> - <code>PATCH /blogs/:id</code><br>
      Updates a specific blog by its ID. Requires authentication and ownership of the blog.
    </li>
    <li>
      <strong>Delete Blog</strong> - <code>DELETE /blogs/:id</code><br>
      Deletes a specific blog by its ID. Requires authentication and ownership of the blog.
    </li>
  </ul>

  <h3>Authentication and Authorization</h3>
  <p>
    Authentication is handled using JSON Web Tokens (JWT). When a user signs up or signs in, a token is generated and
    returned in the response. This token should be included in the <code>x-api-key</code> header of subsequent requests as
    a Bearer token for authentication.
  </p>
  <p>
    Authorization is implemented to ensure that users can only perform certain actions on their own blogs. The
    <code>blogGuard</code> middleware is used to check if the authenticated user owns the blog they are trying to update or
    delete. If the ownership is not confirmed, a 403 Forbidden error is thrown.
  </p>

  <h2>Folder Structure</h2>
  <p>
    The project follows a typical folder structure for a Node.js Express application:
  </p>
  <ul>
    <li><code>src/controllers</code>: Contains the controllers for handling requests and responses.</li>
    <li><code>src/middlewares</code>: Includes custom middleware functions for authentication and request validation.</li>
    <li><code>src/models</code>: Defines the Mongoose models for the application.</li>
    <li><code>src/routes</code>: Contains the route handlers for different API endpoints.</li>
    <li><code>src/utils</code>: Includes utility functions used throughout the application.</li>
    <li><code>src/index.js</code>: The entry point of the application.</li>
  </ul>

  <h2>Dependencies</h2>
  <p>The application relies on the following dependencies:</p>
  <ul>
    <li><code>bcrypt</code>: Used for hashing passwords securely.</li>
    <li><code>dotenv</code>: Used for loading environment variables from a <code>.env</code> file.</li>
    <li><code>express</code>: The web framework for handling HTTP requests and responses.</li>
    <li><code>jsonwebtoken</code>: Used for generating and verifying JSON Web Tokens (JWT).</li>
    <li><code>mongoose</code>: An Object Data Modeling (ODM) library for MongoDB.</li>
    <li><code>morgan</code>: Used for logging HTTP requests (optional in the provided package.json).</li>
    <li><code>nodemon</code>: Used for automatically restarting the application during development (optional in the provided
      package.json).</li>
  </ul>

  <p>These dependencies are automatically installed when running <code>npm install</code>.</p>

  <h2>License</h2>
  <p>This project is licensed under the ISC license. See the <a href="LICENSE">LICENSE</a> file for more details.</p>

  <p>Feel free to contribute to this project by opening issues or submitting pull requests.</p>
</body>

</html>
