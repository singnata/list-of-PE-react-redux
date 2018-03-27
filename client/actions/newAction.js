import { push } from 'react-router-redux';

import { 
  SAVE_ENTREPRENEUR_REQUESTED, 
  SAVE_ENTREPRENEUR_SUCCESS, 
  SAVE_ENTREPRENEUR_FAILED 
} from './actionTypes';

const saveEntrepreneurRequested = () => {
  return {
    type: SAVE_ENTREPRENEUR_REQUESTED,
  };
};

const saveEntrepreneurSuccess = () => {
  return {
    type: SAVE_ENTREPRENEUR_SUCCESS,
  };
};

const saveEntrepreneurFailed = (error) => {
  return {
    type: SAVE_ENTREPRENEUR_FAILED,
    payload: error,
  };
};

export const saveEntrepreneur = (entrepreneur) => {
  const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
  return (dispatch) => {
    dispatch(saveEntrepreneurRequested());

    fetch(entrepreneursApi, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(entrepreneur),
    })
      .then(() => {
        dispatch(saveEntrepreneurSuccess());
        setTimeout(() => dispatch(push('/')), 2000);
      })
      .catch((error) => {
        dispatch(saveEntrepreneurFailed(error));
      });
  };
};
