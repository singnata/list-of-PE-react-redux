import React from 'react';
import { Link, Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveEntrepreneur } from '../actions/newAction';
import Form from './Form/Form';

class New extends React.Component {

  handleSubmit = (values) => {
    this.props.saveEntrepreneur(values);
  }

  render() {
    const { error } = this.props;
    return (
      error 
        ? <div>{error}</div>
        : <div className="new">
            <Form onSubmit={this.handleSubmit} />
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.newEntr.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveEntrepreneur}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
