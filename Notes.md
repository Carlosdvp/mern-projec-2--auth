
## Youtube tutorial
MERN Crash Course | JWT Authentication, Redux Toolkit, Deployment & More 

https://www.youtube.com/watch?v=R4AhvYORZRY

https://github.com/bradtraversy/mern-auth

-------------------------------------------------------------------------------

# Goal

- Introduce MERN authentication with JWT
- Use Redux toolkit to manage state

## Steps

1. Overview
    - Start with the backend to build an API
    - Build a simple frontend
      - sign in page
      - register page
      - profile page
    - Deployment
      - your cloud provider of choice

2. Install backend dependencies in the root folder

3. Create the routes for our API
    - POST/api/users
      - register a user
    - POST/api/users/auth
      - authenticate a user and get token
    - POST/api/users/logout
      - logout the user and clear cookie
    - GET/api/users/profile
      - get user profile
    - PUT/api/users/profile
      - update profile

4. Create two folders for the routes, one for the routing and one to handle the logic, the controllers:
    - routes/
    - controllers/

Begin by creating one route, with it's simple controller, just to build out the structure before adding complexity.
    - First we set the userRoutes folders and files and the api/auth route.
    - Once we see that it's working we can switch our controllers to use an async handler

5. Create a custom error handler
    - the goal is to suppress the default html page that is rendered when an error is encountered
    - this way we get a simple message and the stack trace when on dev environment

6. Add the remaining routes
    - first add the controllers
    - then add the remaining routes


## Architeture - Folder structure

- The root will have our server-side package.json
- The backend folder will hold the models, controllers, all the backend source code.
- The frontend folder will hold all the React stuff