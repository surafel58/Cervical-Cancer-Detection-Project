
export default function Validation(values) {
  const errors = {}
  const email_pattern = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z]{2,6}$/
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
  const usernamePattern = /^[A-Za-z\s]+(?:[_\d][A-Za-z\s]*)?$/
  if (values.name === '') {
    errors.name = 'Username is required'
  } else if (!usernamePattern.test(values.name)) {
    errors.name = 'Please Enter Valid Username'
  }
  if (values.email === '') {
    errors.email = 'Email is required'
  } else if (!email_pattern.test(values.email)) {
    errors.email = 'Please Enter Valid Email'
  }
  if (values.password === '') {
    errors.password = 'Password is required'
  } else if (!passwordPattern.test(values.password)) {
    errors.password =
      'Password require atleast 1 uppercase atleaset 1 lowercase underscore and number'
  }
  return errors
}
