import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadDetails } from '../actions/detailsAction';
import { updateEntrepreneur } from '../actions/updateAction';
import Form from './Form/Form';

class Edit extends React.Component {
  componentDidMount() {
    const id = this.props.params.id;
    this.props.loadDetails(id);
  }

  handleSubmit = (values) => {
    const id = values.id;
    this.props.updateEntrepreneur(id, values);
  }

  render() {
    const { error, isLoaded, entrepreneur } = this.props;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="edit">
          <Form 
            onSubmit={this.handleSubmit} 
            initialValues={entrepreneur} />
        </div>
      ) 
    }
  }
}

const mapStateToProps = (state) => {
  return {
    entrepreneur: state.details.entrepreneur,
    error: state.details.error,
    isLoaded: state.details.isLoaded,
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadDetails, updateEntrepreneur}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
