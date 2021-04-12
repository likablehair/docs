---
sidebar: auto
---

# Components

## Type of Props

#### Props Style

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

#### Props Validation - E.g. EmailValidation

| Name              |   Type    |    Default     |
| ----------------- | :-------: | :------------: |
| emailValidation   | `Boolean` |     false      |
| requiredMessage   | `String`  |    Required    |
| notAnEmailMessage | `String`  | Invalid e-mail |

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

#### Props Button

| Name                 |   Type    | Default  |
| -------------------- | :-------: | :------: |
| loginButtonColor     | `String`  | Required |
| loginButtonBlock     | `Boolean` |  false   |
| loginButtonOutlined  | `Boolean` |  false   |
| loginButtonAlignment | `String`  |  center  |

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
#### Props List

#### Props Table
