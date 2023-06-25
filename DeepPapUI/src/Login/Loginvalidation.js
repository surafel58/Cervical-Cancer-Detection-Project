
export default function Loginvalidation(values) {
  
    let errors = {}
    let is_valid = true;
    const email_pattern = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z]{2,6}$/;
   
    if (values.email === '') {
        errors.email = 'Email is required'
        is_valid = false;
    } 
    else if (!email_pattern.test(values.email)) {
        errors.email = 'Please Enter Valid Email'
        is_valid = false;
    }

    if (!values.password) {
      errors.password = 'Password is required'
      is_valid = false;

    } 
    else if (values.password.length < 8) {
      errors.password = 'password must be more than 8 character '
      is_valid = false;

    }

  return { errors, is_valid };
}
