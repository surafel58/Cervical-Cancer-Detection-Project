
export default function profileValidation(values) {
    const errors = {}
    const email_pattern = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z]{2,6}$/
    
    if (values.name === '') {
      errors.name = 'Username is required'
    }  else if (values.name.length < 5) {
        errors.name = "Username must be more than 5 character "
    }
    if (values.email === '') {
      errors.email = 'Email is required'
    } else if (!email_pattern.test(values.email)) {
      errors.email = 'Please Enter Valid Email'
    }
    if (values.password === '') {
      errors.password = 'Password is required'
    } else if (values.password.length < 8) {
        errors.password = 'password must be more than 8 character '
    }
    if(values.confirmpassword === ''){
        errors.confirmpassword = 'confirm your password'
    }
    else if (values.password !== values.confirmpassword){
        errors.confirmpassword ='password is not the same'
      }

    return errors
  }
  