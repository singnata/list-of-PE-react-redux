import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from './RenderField';
import { validate } from './Validate';

class Form extends React.Component {
  componentDidMount() {
    if (this.props.initialValues) {
      this.props.initialize({ ...this.props.initialValues });
    }
  }

  saveEntrepreneur() {
    const newEntrepreneur = this.props.values;
    this.props.saveEntrepreneur(newEntrepreneur);
  }

  render() {
    const { handleSubmit, submitting, pristine, valid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" component={renderField} type="text" label="First Name" />
        <Field name="lastName" component={renderField} type="text" label="Last Name" />
        <Field name="code" component={renderField} type="number" label="Code" />
        <div className="form-group-description">
          <h3>Address</h3>
          <Field name="zipCode" component={renderField} type="number" label="Zip Code" />
          <Field name="region" component={renderField} type="text" label="Region" />
          <Field name="city" component={renderField} type="text" label="City" />
          <Field name="street" component={renderField} type="text" label="Street" />
          <Field name="streetNumber" component={renderField} type="text" label="Street Number" />
          <Field name="apartmentNumber" component={renderField} type="number" label="Apartment Number" />
        </div>
        <div className="form-group-description">
          <h3>Registration</h3>
          <Field name="dateOfRegistration" component={renderField} type="date" label="Date Of Registration" />
          <Field name="registrationNumber" component={renderField} type="text" label="Number Of Registration" />
        </div>
        <div className="form-group-description">
          <h3>Account</h3>
          <Field name="bank" component={renderField} type="text" label="Bank" />
          <Field name="account" component={renderField} type="number" label="Account" />
          <Field name="mfo" component={renderField} type="number" label="MFO" />
        </div>
        <button disabled={!valid || pristine || submitting} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'editForm',
  enableReinitialize: true,
  validate, 
})(Form);
export default Form;
