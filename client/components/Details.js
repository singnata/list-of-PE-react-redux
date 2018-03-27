import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadDetails } from '../actions/detailsAction';

//React.cloneElement passes props to child
class Details extends React.Component {
  componentDidMount() {
    const id = this.props.params.id;
    this.props.loadDetails(id);
  }
  render() {
    const { error, isLoaded, entrepreneur } = this.props;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="details">
          <div className="details-item">
            <span className="details-item-title">First Name: </span>
            {entrepreneur.firstName}
          </div>
          <div className="details-item">
            <span className="details-title">Last Name: </span>
            {entrepreneur.lastName}
          </div>
          <div className="details-item">
            <span className="details-item-title">Code: </span>
            {entrepreneur.code}
          </div>
          <div className="details-title">Address</div>
          <div className="details-item">
            <span className="details-item-title">Zip Code: </span>
            {entrepreneur.zipCode}
          </div>
          <div className={`${'details-item'} ${entrepreneur.region ? '' : 'invisible'}`}>
            <span className="details-item-title">Region: </span>
            {entrepreneur.region}
          </div>
          <div className="details-item">
            <span className="details-item-title">City: </span>
            {entrepreneur.city}
          </div>
          <div className="details-item">
            <span className="details-item-title">Street: </span>
            {entrepreneur.street}
          </div>
          <div className="details-item">
            <span className="details-item-title">Street Number: </span>
            {entrepreneur.streetNumber}
          </div>
          <div className={`${'details-item'} ${entrepreneur.apartmentNumber ? '' : 'invisible'}`}>
            <span className="details-item-title">Apartment Number: </span>
            {entrepreneur.apartmentNumber}
          </div>
          <div className="details-title">Registration</div>
          <div className="details-item">
            <span className="details-item-title">Registration Number: </span>
            {entrepreneur.registrationNumber}
          </div>
          <div className="details-item">
            <span className="details-item-title">Registration Number: </span>
            {new Date(entrepreneur.dateOfRegistration).toLocaleDateString()}
          </div>
          <div className="details-title">Account</div>
          <div className="details-item">
            <span className="details-item-title">Account Number: </span>
            {entrepreneur.account}
          </div>
          <div className="details-item">
            <span className="details-item-title">Bank: </span>
            {entrepreneur.bank}
          </div>
          <div className="details-item">
            <span className="details-item-title">Bank MFO: </span>
            {entrepreneur.mfo}
          </div>
          <Link to={`/edit/${entrepreneur.id}`}>edit</Link>
        </div>
      );
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
  return bindActionCreators({loadDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
