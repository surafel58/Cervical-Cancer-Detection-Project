import React from 'react'

export default function toastValidation(values) {
  const errors = {}
  if (values.patientId ==="")
  {
  errors.patientId = "Required Field"
  } 
  return  errors;
}
