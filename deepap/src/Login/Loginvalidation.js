
export default function Loginvalidation(values) {
    let errors = {}
   
    if(values.name==="")
    {
        errors.name = "Username required"
    }
    else if (values.name.length < 5) {
        errors.name = "Username must be more than 5 character "
    }

    if (!values.password) {
      errors.password = 'Password is required'
    } 
    else if (values.password.length < 8) {
      errors.password = 'password must be more than 8 character '
    }

    return errors;
}
