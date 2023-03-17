# Technical Assignment for Settly

## About the Project
This project is a technical assignment given by [Settly](https://getsettly.com/) as a part of the hiring process for an internee / Junior web developer. The web version of this project can be seen on [Render](https://settly-technical-assignment.onrender.com). A quick guide to what was built:

<div align="center">
<img src="https://res.cloudinary.com/dl44q0v9r/image/upload/v1678746912/ezgif.com-gif-maker_1_mwynpg.gif" width="800" alt="WelcomeScreen">
</div>

## Description
The Home page of the project is a registration page where a user can register to create an account using his first name, surname and email id. Captcha validation using Google API is also done. Once registered successfully, the user can log into their account dashboard. Without proper authorization dashboard will not be available. Invalid URLs will be redirected to "Not Found" page.

## Usage
* User can register only with proper format of email.
* User should choose a password that is atleast 3 characters.
* No field can be left blank.
* Google Captcha validation is a must.
* User should re-enter email and password for confirmation.

## Code Structure
```
client
├── public
|   └──index.html
└── src
|   └── components
|   |     └── Dashboard.jsx
|   |     └── Login.jsx
|   |     └── NotFound.jsx
|   |     └── RegistrationForm.jsx
|   └── Contexts
|   |     └── UserContext.js
|   └── App.css
|   └── App.jsx
|   └── index.css
|   └── index.js
Server
├── database
|   └──connectDatabase.js
├── models
|   └──User.js
└── app.js
└── auth.js
└── index.js
|
package-lock.json
package.json
README.md
```
## Stack / external libraries

The app was built in MERN stack (Mongoose, Express, React, Node) using the knowledge gained by studying different modules of Web Development at [HackYourFuture](https://www.hackyourfuture.net/) curriculum especially:

 <img src="https://img.shields.io/badge/-HTML:5-750000?logo=html5" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-CSS-4c9ee8?logo=css3" height="30" alt="CSS:3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-Javascript-000000?logo=javascript" height="30" alt="JavaScript">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-Visual%20Studio%20Code-0cc0e7?logo=visual-studio" height="30" alt="VSC">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-React-gray?logo=react" height="30" alt="React">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-MongoDB-000000?logo=mongodb" height="30" alt="MongoDB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-NodeJs-ffffff?logo=nodedotjs" height="30" alt="MongoDB">
 
 Next to that, the following extras were used:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

### 3.2 Client-side libraries

- `react-google-recaptcha` || To connect to Google API for bot detection.See [docs](https://www.google.com/recaptcha/about/)

### 3.3 Server-side libraries

- `bcrypt` || To hash passwords for security by incorporating salt method. See [docs](https://www.npmjs.com/package/bcrypt)
- `jsonwebtoken` || To generate user token signatures for authorization. See [docs](https://www.npmjs.com/package/jsonwebtoken)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
- `node-fetch` || To bring Fetch API to Node. See [docs](https://www.npmjs.com/package/node-fetch)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `validator` || To validate the emails provided by the user. See [docs](https://www.npmjs.com/package/validator)



