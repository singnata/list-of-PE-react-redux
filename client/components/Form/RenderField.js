import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './Validate';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <MuiThemeProvider>
      <TextField 
        hintText={label} 
        type={type} 
        floatingLabelText={label} 
        errorText={touched && error} 
        {...input} />
    </MuiThemeProvider>
  </div>
);
