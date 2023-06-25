
export default function Validation(values) {

  let errors = {}
  const email_pattern = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z]{2,6}$/
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
  const usernamePattern = /^[A-Za-z\s]+(?:[_\d][A-Za-z\s]*)?$/
  let is_valid = true;

  if (values.name === '') {
    errors.name = 'Username is required';
    is_valid = false;
  } 
  else if (!usernamePattern.test(values.name)) {
    errors.name = 'Please Enter Valid Username';
    is_valid = false;
  }

  if (values.email === '') {
    errors.email = 'Email is required'
    is_valid = false;
  } 
  else if (!email_pattern.test(values.email)) {
    errors.email = 'Please Enter Valid Email'
    is_valid = false;
  }

  if (values.password === '') {
    errors.password = 'Password is required'
    is_valid = false;
  } 
  else if (values.password.length < 8){
    errors.password = 'Password must be greater than 7 characters';
    is_valid = false
  }
  else if (!passwordPattern.test(values.password)) {
    errors.password = 'Password require atleast 1 uppercase atleaset 1 lowercase underscore and number';
    is_valid = false;
  }

  return { errors, is_valid };
}
