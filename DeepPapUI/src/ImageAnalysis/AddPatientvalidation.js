// export default function AddPatientvalidation(values) {
export default function AddPatientvalidation(values) {
  const errors = {}
  const phoneNumberpattern =  /^(?:\+2519|09)\d{8}$/ // /^09\d{8}$/
  
  if (values.patientId === '') {
    errors.patientId = 'Required Field'
  }

  if (values.fullName === '') {
    errors.fullName = 'Required Field'
  }

  if (values.address === '') {
    errors.address = 'Required Field'
  }

  if (values.phoneNumber === '') {
    errors.phoneNumber = 'Required Field'
  } else if (!phoneNumberpattern.test(values.phoneNumber)) {
    errors.phoneNumber = 'Please Enter Valid phoneNumber'
  }

  if (values.age === '') {
    errors.age = 'Required Field'
  }

  return errors
}
