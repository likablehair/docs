# Backend Docs
## Migration guide

install the knex command line 

`npm install knex -g`

---

execute unexecuted migration

`knex migrate:up` (one at a time)

`knex migrate:latest` (all of them)

---

create migration

`knex migrate:make migration_name`

---

rollback all migration

`knex migrate:rollback --all`

---

rollback specific migration

`knex migrate:down 001_migration_name.js`

and reexecute it

`knex migrate:up 001_migration_name.js`

## Development guide

npm run start;

# Documentation

## HasAuthToken middleware
description
response in case of error
example

## Permission module
description

`can(actor, action, resource)`
  function
  globalized function
  example
`isPermittedTo(action, resource)`
  middleware
  response in case of error
  example

## Global path helper
`baseDir`
  return the absolute path of the base dir of the project
`absPath(path)`
  return the absolute path of `path`added to the base dir of the project
`include(path)`
  call `require(absPath(path))`

## Authetication
the authentication is handled with [Passport](http://www.passportjs.org/) and it's an auth-token based one. Useful endpoints:
  `POST /users/login`
  request body: `
    {
      user: {
        email: 'required',
        password: 'required',
      }
    }
  `
  success response: `
    {
      "success": 'boolean',
      "auth-token": 'token, to send each subsequent request',
      "user-id": 'user's id, to send each subsequent request',
      "token-max-age": 'days within token expiration'
    }
  `

  `POST /users/logout`
  warning: need to send the auth-token
  request body: ``
  success response: `
    {
      "success": 'boolean',
    }
  `

## Environment variable
the project use [dotenv](https://www.npmjs.com/package/dotenv), to add an environment variable create a `.env` file in the rood directory and add them in format `VARIABLE=VALUE`, they will be accessible within the application with `process.env.VARIABLE`. Never commit the .env file. Use `.env.example` to create `.env` file

## Database configuration
the project use [Objection](https://vincit.github.io/objection.js/), built on [Knex](http://knexjs.org/). In `knexfile.js` there are the database informations for each environment. To set the correct ones on the project use env vars:

`
DEVELOPMENT_DATABASE_HOST=host_of_the_databse
DEVELOPMENT_DATABASE_USER=user_of_the_databse
DEVELOPMENT_DATABASE_PASS=password_of_the_databse
DEVELOPMENT_DATABASE_NAME=name_of_the_databse
`

change `DEVELOPMENT` to `PRODUCTION` or whather is the environment

## Endpoints


