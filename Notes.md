
## Youtube tutorial
MERN Crash Course | JWT Authentication, Redux Toolkit, Deployment & More 

https://www.youtube.com/watch?v=R4AhvYORZRY

https://github.com/bradtraversy/mern-auth

-------------------------------------------------------------------------------

# Goal

- Introduce MERN authentication with JWT
- Build the API with express and MongoDB
- Build the frontend with Vite and React
- Use Redux toolkit to manage state

## Architeture - Folder structure

- The root will have our server-side package.json
- The backend folder will hold the models, controllers, all the backend source code.
- The frontend folder will hold all the React stuff

## Steps -- Backend

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
    - then add the boilerplate for remaining routes

7. Add the logic for the functionality of the first three routes: register, login, logout.

8. Now we need to protect our routes.
    - add an authMiddleware.js file with the protectRoutes method
    - add the method to the server.js file for the routes we want to protect

9. Now complete the remaining routes: /profile, get user and update user


## Steps - Frontend

1. Create a new Vite project: `npm create vite@latest frontend`
    - setup the project
    - clear out unnecessary boilerplate code
    - add bootstrap and react-bootstrap

2. Create our Components and Screens
    - Header
    - Hero

3. Add Redux-toolkit
    - implement the boilderplate and add the imports to the required files

4. Complete the Profile page and it's functionality

## Steps - Deployment

Deployment instruction from the tutorial can be found here:
https://gist.github.com/bradtraversy/b8b72581ddc940e0a41e0bc09172d91b


1. Prepare frontend app for production by running the build command: `npm run build`
2. Update the server.js file
    - if NODE_ENV === 'production' then make it so that the server looks in the dist folder for the index.html file as the entrypoint for the application (line 21)
3. Go to your cloud provider and provision a server
    - can use either Debian or Ubuntu 23 as the OS
    - get the SSH connection string and use a terminal to SSH into your server
    - follow the steps to get it setup
        - `apt update && apt upgrade`
    - create a new user (so as not to run everything as root)
        - `adduser newuser`
    - add new user to be able to run sudo commands
        - `usermod -aG sudo newuser`
    - login as the new user
        - `su - newuser`
    - install Node on Linux (ubuntu) [this info should be somewhere on the Node website]
4. Prepare the server to install the application
    - create a folder for the app: `mkdir apps`
    - cd into the new folder
    - `git clone your_app_repo`
    - verify the app has been cloned and cd into the app folder
    - rename the .env-example file: `mv .env-example .env`
    - edit the .env file using nano: `nano .env`
        - change the NODE_ENV to production
        - add the MONGO_URI for our database
5. Install the dependencies
    - in the root folder: `npm install`
    - cd into /frontend and run `npm install`
    - for frontend run `npm run build`
6. Enable MongoDB to receive connections from the server
    - either by adding the specific server's IP address
    - or by allowing connections from anywhere
7. Setup a process manager to run the server on the background
    - install the process manager in the root folder: `sudo npm i pm2`
    - run it with this command: `pm2 start backend/server.js`
8. Use Nginx as a proxy so that you don't need to add the port to the url to be able to navigate to the app
    - first enable the default firewall for the server: `sudo ufw enable`
        - by default all ports are blocked
        - enable ports for ssh, http, and https: `sudo ufw allow ssh`, etc.
    - now install nginx: `sudo apt install nginx`
    - to confirm that nginx is installed correctly, navigate to the server's IP address, you should see the "Welcome to nginx" page
9. Configure the application so we can access it through the root domain
    - go to: `sudo nano /etc/nginx/sites-available/default`
    - find the location block:
        - in 'server_name' you would add the doamin name if you wanted to: "testapp.dev www.testapp.dev"
        - in the location block delete everything and replace with this:
            location / {
                proxy_pass http://localhost:5000;    # or whichever port your app runs on
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        - reload nginx: `sudo service nginx restart`
    - go to your browser, reload th pae and the app should now be reachable via the server's root domain



