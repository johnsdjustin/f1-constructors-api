### Description
A simple RESTful API written with Node, Express, and Typescript that will return F1 contructor data.

My goals with this project are: 

    1. To create a functioning RESTful API that returns F1 constructor information
    
    2. To practice Typescript

### Usage
* Clone the repo
* Run `npm i` to install dependencies
* Compile the project by running `npm run build`
* Start the project by running `npm start`
* Call the API `http://localhost:3000/<route>`

### Routes
```
GET /teams

GET /teams/:team
```

### Project Todo

* Add ability to create a team
* Add unit tests w/ Jest
* Integrate with a database
* Integrate ESList
* Integrate Prettier
* Automate ESLint, Prettier, and Unit Testing checks with Github Actions
