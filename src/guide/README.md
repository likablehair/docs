---
sidebar: auto
---

# Backend Docs

## HasAuthToken middleware
`HasAuthToken` is an express middleware that filter requests without authorization token.

#### Missing auth-token or user-id
In case of missing auth-token or user-id it returns `400` with a body message like this:
```js
{
  'message': 'token or user not known'
}
```

#### Wrong auth-token
In case of wrong auth-token it returns `400` with a body message like this:
```js
{
  'message': 'access denied'
}
```

## Permission module
This module is used to filter requests in base of the user's permissions. Permissions are stored in the database into the table `permissions` e they reference the `groups` table.


### can function
```js
let actor = {
  id: 1, // user id
  admin: true // is admin
}

let action = 'view' 
// name of the action, usually view or manage

let resource = 'User'
// name of the resource to access, usually the name of the model

function can(actor, action, resource)
```

`can` function takes an actor, an action and a resource and returns `true` when the user is authorized, `false` otherwise.

`can` is a global function

#### examples
```js
let actor = {
  id: 1,
  admin: true
}
let action = 'view' 
let resource = 'User'

let authorized = can(actor, action, resource)
if(authorized) {
  // can perform actions
} else {
  // cannot
}
```

### isPermittedTo middleware
```js
let action = 'view' 
// name of the action, usually view or manage

let resource = 'User'
// name of the resource to access, usually the name of the model

function isPermittedTo(action, resource)
```

`isPermittedTo` is similar to `can` function, but differently it is a `middleware` and it doesn't take the user object as parameter, it takes it from the `req` object. 

It <b>cannot</b> be used before or without [hasAuthToken](./#hasauthtoken-middleware) middleware.

#### Not authorized
In case of permission denied it returns `400` with a body message like this:
```js
{
  success: false,
  message: `You're not authorize to this page`
}
```

#### examples
```js
// index.js

router.get('/danger', [hasAuthToken, isPermittedTo('manage', 'Danger')], async (req, res) => {
  // some danger stuff
});
```

## Global path helper
### baseDir var
`baseDir` returns the absolute path of the base dir of the project.

It is a global var.
#### examples
```js
console.log(baseDir)
// my/path/to/my/project/root/
```

### absPath function
```js
let path = 'my/relative/path'
function absPath(path)
```

`absPath` return the absolute path of `path` added to the base dir of the project

It is a global function.
#### examples
```js
let path = 'my/relative/path'
let myAbsolutePath = absPath(path)
console.log(myAbsolutePath)
// my/path/to/my/project/root/my/relative/path
```

### include function
```js
let path = 'my/relative/path/file.js'
function include(path)
```

`include` call `require(absPath(path))`

It is a global function.

#### examples
```js
// to/include/hello.js
module.exports = 'Hello world'

// index.js
const path = 'to/include/hello.js'
const hello = include(path)
console.log(hello)
// Hello world
```

<!-- 

Authetication

 -->

## Authetication
the authentication is handled with [Passport](http://www.passportjs.org/) and it's an auth-token based one. Useful endpoints:

### login
```js
POST /users/login

// request body
{
  user: {
    email: 'required',
    password: 'required',
  }
}

// success response
{
  "success": "boolean",
  "auth-token": "token, to send each subsequent request",
  "user-id": "user's id, to send each subsequent request",
  "token-max-age": "days within token expiration"
}
```

### logout
```js
POST /users/logout

// request body empty

// success response
{
  "success": 'boolean',
}
```
::: warning WARNING
need to send the auth-token in the `auth-token` header
:::

## Environment variable
the project use [dotenv](https://www.npmjs.com/package/dotenv), to add an environment variable create a `.env` file in the rood directory and add them in format `VARIABLE=VALUE`, they will be accessible within the application with `process.env.VARIABLE`. Never commit the .env file. Use `.env.example` to create `.env` file

#### examples
```bash
# .env

PIPPO='pippo value'
PLUTO='pluto value'
```

## Database configuration
the project use [Objection](https://vincit.github.io/objection.js/), built on [Knex](http://knexjs.org/). In `knexfile.js` there are the database informations for each environment. To set the correct ones on the project use env vars:

```bash
# .env

# ...
DEVELOPMENT_DATABASE_HOST=host_of_the_databse
DEVELOPMENT_DATABASE_USER=user_of_the_databse
DEVELOPMENT_DATABASE_PASS=password_of_the_databse
DEVELOPMENT_DATABASE_NAME=name_of_the_databse
```

change `DEVELOPMENT` to `PRODUCTION` or whather is the environment



## Migrations

<b>Migrations</b> are operations performed on the database schema, they allow each developer working on the same project to have the same database schema. [Knex](http://knexjs.org/#Migrations) has it's own migration CLI. Here the main commands:

#### install the knex command line 
```bash
npm install knex -g
```

#### execute the first unexecuted migration 
```bash
knex migrate:up
```

#### execute all unexecuted migrations
```bash
knex migrate:latest
```

#### execute specific migration
```bash
knex migrate:up 001_migration_name.js
```

#### create a migration file
```bash
knex migrate:make migration_name
```

::: warning Migration filename
use `snake case` in the command, it will be translated in `camel case`
:::

#### rollback all migrations
```bash
knex migrate:rollback --all
```

::: danger Migration rollback
this could cause some errors due to migration definition
:::

#### rollback specific migration
```bash
knex migrate:down 001_migration_name.js
```

::: danger Migration rollback
this could cause some errors due to migration definition
:::

## Development commands

### Start the development server
```bash
npm run start
```

