import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadEntrepreneurs, deleteEntrepreneur } from '../actions/listAction';

class List extends React.Component {
  componentDidMount() {
    this.props.loadEntrepreneurs();
  }
  render() {
    const { error, isLoaded, entrepreneurs, deleteEntrepreneur } = this.props;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="list">
          <ul>
            {entrepreneurs.map((entrepreneur) => (
              <li key={entrepreneur.id}>
                {entrepreneur.lastName} {entrepreneur.firstName}
                <Link to={`/detail/${entrepreneur.id}`}>more details</Link>
                <button
                  onClick={() => {
                    deleteEntrepreneur(entrepreneur.id);
                  }}>
                  delete
                </button>
              </li>
            ))}
          </ul>
          <Link to="/new">add new entrepreneur</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    entrepreneurs: state.list.entrepreneurs,
    error: state.list.error,
    isLoaded: state.list.isLoaded,
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadEntrepreneurs, 
    deleteEntrepreneur
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
