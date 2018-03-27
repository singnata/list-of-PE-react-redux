import { push } from 'react-router-redux';

import { 
  UPDATE_ENTREPRENEUR_REQUESTED, 
  UPDATE_ENTREPRENEUR_SUCCESS, 
  UPDATE_ENTREPRENEUR_FAILED 
} from './actionTypes';

const updateEntrepreneurRequested = () => {
  return {
    type: UPDATE_ENTREPRENEUR_REQUESTED,
  };
};

const updateEntrepreneurSuccess = () => {
  return {
    type: UPDATE_ENTREPRENEUR_SUCCESS,
  };
};

const updateEntrepreneurFailed = (error) => {
  return {
    type: UPDATE_ENTREPRENEUR_FAILED,
    payload: error,
  };
};

export const updateEntrepreneur = (id, entrepreneur) => {
  const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
  return (dispatch) => {
    dispatch(updateEntrepreneurRequested());

    fetch(`${entrepreneursApi}/${id}`, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(entrepreneur),
    })
      .then(() => {
        dispatch(updateEntrepreneurSuccess());
        setTimeout(() => dispatch(push('/')), 1000);
      })
      .catch((error) => {
        dispatch(updateEntrepreneurFailed(error));
      });
  };
};
