
export default function deleteValidation(values) {
    const errors = {}

    if (values.name === '') {
      errors.name = 'Username is required'
    }
    if (values.password === '') {
      errors.password = 'Password is required'
    }

    return errors
}