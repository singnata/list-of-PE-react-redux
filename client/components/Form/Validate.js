import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'code',
    'zipCode',
    'city',
    'street',
    'streetNumber',
    'dateOfRegistration',
    'registrationNumber',
    'bank',
    'account',
    'mfo',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (!/^[a-zA-Z]*$/.test(values.firstName)) {
    errors.firstName = 'Must be only letters';
  }
  if (values.lastName && !/^[a-zA-Z]+([\-\s][a-zA-Z]+)?$/.test(values.lastName)) {
    errors.lastName = 'Must be only letters';
  }
  if (values.code && !/^[1-9]{1}[0-9]{9}$/.test(values.code)) {
    errors.code = 'Must be 10 numbers';
  }
  if (values.zipCode && !/^[0-9]{5}$/.test(values.zipCode)) {
    errors.zipCode = 'Must be 5 numbers';
  }
  if (values.region && !/^[a-zA-Z]+([\-\s][a-zA-Z]+)?$/.test(values.region)) {
    errors.region = 'Must be only letters';
  }
  if (values.city && !/^[a-zA-Z]+([\-\s][a-zA-Z]+)?$/.test(values.city)) {
    errors.city = 'Must be only letters';
  }
  if (values.street && !/^[1-9\s]{0,3}[a-zA-Z]+([\-\s][a-zA-Z]+)?$/.test(values.street)) {
    errors.street = 'Must be only letters';
  }
  if (values.streetNumber && !/^[1-9][0-9]?(([\-\/\s]?[a-zA-Z])|([\/][1-9]))?$/.test(values.streetNumber)) {
    errors.streetNumber = 'Must be only numbers';
  }
  if (values.apartmentNumber && !/^[1-9][0-9]{0,2}$/.test(values.apartmentNumber)) {
    errors.apartmentNumber = 'Must be only letters';
  }
  if (values.registrationNumber && !/^[1-9][\s]?[0-9]{3}[\s]?[0]{3}[\s]?[0]{4}[\s]?[0-9]{6}$/.test(values.registrationNumber)) {
    errors.registrationNumber = 'Must be only letters';
  }
  if (values.bank && !/^[a-zA-Z]*([\-\s][a-zA-Z]+){0,2}$/.test(values.bank)) {
    errors.bank = 'Must be only letters';
  }
  if (values.account && !/^2600[0-9]{6,12}$/.test(values.account)) {
    errors.account = 'Please enter a valid value';
  }
  if (values.mfo && !/^3[0-9]{5}$/.test(values.mfo)) {
    errors.mfo = 'Please enter a valid value';
  }
  return errors;
};
