---
sidebar: auto
---

# API

## Users

### /users/create

- Type: `POST`
- Infos:
```js
// Request body
{
  firstname: 'user firstname',
  lastname: 'user lastname',
  email: 'user email',
  password: 'user clear password',
  enabled: 'Boolean, if user is enabled to login',
  system: 'Boolean, if user is system',
  groups: [
    1, 3 // groups id
  ]
}

// Success Response
{
  success: true,
  results: {
    id: 1,
    // user object
  }
}

// Error Response
{
  success: false,
  results: {
    error: "error title",
    message: "error message",
  }
}
```

::: warning Avatar
the request takes an avatar file
:::

### /users/login

- Type: `POST`
- Infos:
```js
// Request body
{
  user: {
    email: 'required',
    password: 'required',
  }
}

// Success response
{
  "success": true,
  "auth-token": "token, to send each subsequent request",
  "user-id": "user's id, to send each subsequent request",
  "token-max-age": "days within token expiration"
}
```

### /users/logout

- Type: `POST`
- Infos:
```js
// Request body
{ }

// Success response
{
  "success": true,
}
```

### /users/list
- Description: returns the list of users, exclude system users
- Type: `GET`
- Infos:
```js
// Request params
{ 
  page: 'page number'
  row_per_page: 'number of rows for page'
}

// Success response
{
  success: true,
  results: [
    {
      id: 'user id', 
      email: 'user email ', 
      firstname: 'user firstname', 
      lastname: 'user lastname', 
      birthday: 'user birthday', 
      avatar: 'user avar url'
    },
    // ...
  ]
}

// Error Response
{
  success: false,
  results: {
    error: "error title",
    message: "error message",
  }
}
```

### /users/update
- Description: update user informations
- Type: `POST`
- Infos:
```js
// Request params
{
  id: 'user id'
  firstname: 'user firstname',
  lastname: 'user lastname',
  email: 'user email',
  password: 'user clear password',
  enabled: 'Boolean, if user is enabled to login',
  system: 'Boolean, if user is system',
  groups: [
    1, 3 // groups id
  ]
}

// Success response
{
  success: true,
  id: 'user id', 
  email: 'user email ', 
  firstname: 'user firstname', 
  lastname: 'user lastname', 
  birthday: 'user birthday', 
  avatar: 'user avar url'
}

// Error Response
{
  success: false,
  results: {
    error: "error title",
    message: "error message",
  }
}
```

### /users/me
- Description: get my user informations
- Type: `GET`
- Infos:
```js
// Request params
{ }

// Success response
{
  id: 'user id',
  firstname: 'user firstname',
  lastname: 'user lastname',
  email: 'user email',
  system: 'Boolean, if user is system',
}
```

### /users/destroy
- Description: destroy user
- Type: `POST`
- Infos:
```js
// Request params
{ 
  id: "user to destroy id"
}

// Success response
{
  success: true
}

// Error Response
{
  success: false,
  results: {
    error: "error title",
    message: "error message",
  }
}
```

## Groups





