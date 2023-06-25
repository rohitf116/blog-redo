<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node.js Blog App</title>
</head>

<body>
  <h1>Node.js Blog App</h1>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <code>git clone &lt;repository_url&gt;</code>
    <li>Navigate to the project directory:</li>
    <code>cd blog</code>
    <li>Install the dependencies:</li>
    <code>npm install</code>
    <li>Set up environment variables:</li>
    <ul>
      <li>Create a <code>.env</code> file in the root directory.</li>
      <li>Define the following environment variables in the <code>.env</code> file:</li>
      <ul>
        <li><code>MONGODB_URI</code>: The MongoDB connection URI.</li>
        <li><code>JWT_SECRET</code>: The secret key used for JSON Web Token (JWT) authentication.</li>
        <li>(Optional) <code>PORT</code>: The port number on which the server should run (default is 3000).</li>
      </ul>
    </ul>
    <li>Start the application:</li>
    <code>npm start</code>
  </ol>

  <h2>Usage</h2>
  <h3>Users API</h3>
  <ul>
    <li>POST /users/signup: Create a new user by signing up.</li>
    <li>POST /users/signin: Sign in to the application.</li>
  </ul>

  <h3>Blogs API</h3>
  <ul>
    <li>GET /blogs: Get all blogs.</li>
    <li>GET /blogs/:id: Get a blog by ID.</li>
    <li>POST /blogs: Create a new blog (requires authentication).</li>
    <li>PATCH /blogs/:id: Update a blog by ID (requires authentication and ownership).</li>
    <li>DELETE /blogs/:id: Delete a blog by ID (requires authentication and ownership).</li>
  </ul>

  <p>Note: Authentication is done using JSON Web Tokens (JWT). When signing up or signing in, a token will be returned in
    the response, which should be included in subsequent requests as a Bearer token in the Authorization header.</p>

  <h2>Folder Structure</h2>
  <p>The project follows a typical folder structure for a Node.js Express application:</p>
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
    <li>bcrypt: ^5.1.0</li>
    <li>dotenv: ^16.3.1</li>
    <li>express: ^4.18.2</li>
    <li>joi: ^17.9.2</li>
    <li>jsonwebtoken: ^9.0.0</li>
    <li>mongoose: ^7.3.1</li>
    <li>morgan: ^1.10.0</li>
    <li>nodemon: ^2.0.22</li>
  </ul>

  <p>These dependencies are automatically installed when running <code>npm install</code>.</p>

  <h2>Contribution</h2>
  <p>Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please
    open an issue or submit a pull request.</p>

  <h2>License</h2>
  <p>This project is licensed under the ISC license. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
</body>

</html>
