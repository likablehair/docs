---
sidebar: auto
---

# Components

## Type of Props

::: tip Default Props
Below you can find some props
:::

<hr/>

### Props Data

| Name     |   Type   | Default |
| -------- | :------: | :-----: |
| username | `String` |    -    |
| password | `String` |    -    |

::: details View Code - Data Props

```js
     props : {
        username : {
             type : String,
             default: "Username"
        },
        password : {
             type : String,
             default: 'Password'
        },
    }
```

:::

<hr/>

### Props Design

| Name          |   Type   |    Default    |
| ------------- | :------: | :-----------: |
| usernameLabel | `String` | Type Username |
| passwordLabel | `String` | Type Password |

::: details View Code - Design Props

```js
    props : {
        usernameLabel : {
             type : String,
             default: 'Type Username'
        },
        passwordLabel : {
             type : String,
             default: 'Type Password'
        },
    }
```

:::

<hr/>

### Props Style

| Name                 |   Type    | Default |
| -------------------- | :-------: | :-----: |
| flat                 | `Boolean` |  false  |
| solo                 | `Boolean` |  false  |
| dense                | `Boolean` |  false  |
| filled               | `Boolean` |  false  |
| color                | `String`  | primary |
| soloInverted         | `Boolean` |  false  |
| clearable            | `Boolean` |  false  |
| disabled             | `Boolean` |  false  |
| disabledWhenNotValid | `Boolean` |  false  |

::: details View Code - Style Props

```js
    props : {
        flat : {
             type : Boolean,
             default: false
        },
        solo : {
             type : Boolean,
             default: false
        },
        dense : {
             type : Boolean,
             default: false
        },
        filled : {
             type : Boolean,
             default: false
        },
        color : {
             type : Boolean,
             default: false
        },
        soloInverted : {
             type : Boolean,
             default: false
        },
        disabled : {
             type : Boolean,
             default: false
        },
        disabledWhenNotValid : {
             type : Boolean,
             default: false
        },
    }
```

:::

<hr/>

### Props Styles & Classes

| Name    |   Type   | Default |
| ------- | :------: | :-----: |
| styles  | `Object` |   {}    |
| classes | `Object` |   {}    |

::: details View Code - Styles & Classes Props

```js
    props : {
       styles: {
            type: Object,
            default: function () {
                 return {
                   username: {},
                   email: {},
                   password: {},
                   confirmPassword: {},
                   signUpButton: {},
                 };
            },
       classes: {
            type: Object,
            default: function () {
                 return {
                   username: {},
                   email: {},
                   password: {},
                   confirmPassword: {},
                   signUpButton: {},
                 };
            },
      },
    }
```

:::

<hr/>

### Props Validation - E.g. EmailValidation

| Name              |   Type    |    Default     |
| ----------------- | :-------: | :------------: |
| emailValidation   | `Boolean` |     false      |
| requiredMessage   | `String`  |    Required    |
| notAnEmailMessage | `String`  | Invalid e-mail |

::: details View Code - Validation Props

```js
    props : {
        emailValidation : {
             type : Boolean,
             default: false
        },
        requiredMessage : {
             type : String,
             default: 'Required'
        },
        notAnEmailMessage : {
             type : String,
             default: 'Invalid e-mail'
        },
    }
```

:::

<hr/>

### Props Button

| Name                 |   Type    | Default  |
| -------------------- | :-------: | :------: |
| loginButtonColor     | `String`  | Required |
| loginButtonBlock     | `Boolean` |  false   |
| loginButtonOutlined  | `Boolean` |  false   |
| loginButtonAlignment | `String`  |  center  |

::: details View Code - Botton Props

```js
    props : {
        loginButtonColor : {
             type : String,
             default: 'Required'
        },
        loginButtonBlock : {
             type : String,
             default: 'Invalid e-mail'
        },
        loginButtonBlock: {
          type : Boolean,
          default: false
        }
        loginButtonAlignment : {
             type: String,
             default: 'center',
             validator: function (value) {
               return ['left', 'center', 'right'].indexOf(value) !== -1
             }
        },
    }
```

:::

<hr/>

### Props List

<hr/>

### Props Table

<hr/>
