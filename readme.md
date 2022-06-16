# MERN Stack

## Expres on Heroku

* git init + gitignore
* Express - hi
    * express
    * nodemon
    * dotenv - PORT
* Deploy to heroku
* Create a react_project 
    * Build local react 
    * Setup heroku post build
    * Change backend routes to /api/

## React

CRUD - Create, read, update and delete holidays

Login Page - /
Master Page - /holidays/master
Detail Page - /holidays/:id

## Mongoose Schema
* Holiday
    * Name - String
    * Likes - Number
    * Celebrated - Boolean
    * Description - String

## CRUD

Create - /holidays/ - POST - /api/holidays/
Read - /holidays - GET - /api/holidays
Read (Secret) - holidays/:id - GET - /api/holidays/:id

Update - PUT - /api/holidays/:id
Delete - DELETE - /api/holidays/:id

## Security

* Hide Detail Link when not logged in
* Direct access to Detail URL is bounced out

