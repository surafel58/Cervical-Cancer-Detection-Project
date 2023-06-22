import React from 'react'

export default function Loginvalidation(values) {
   
const errors = {}
//const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_).+$/
const usernamePattern = /^[A-Za-z\s]+(?:[_\d][A-Za-z\s]*)?$/

if (values.name === '') {
  errors.name = 'Username is required'
} else if (!usernamePattern.test(values.name)) {
  errors.name = 'Please Enter Valid Username'
}
if (values.password === '') {
  errors.password = 'Password is required'
 return errors;
}

}
