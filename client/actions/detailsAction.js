import { 
  LOAD_DETAILS_REQUESTED, 
  LOAD_DETAILS_SUCCESS, 
  LOAD_DETAILS_FAILED 
} from './actionTypes';

const loadDetailsRequested = () => {
  return {
    type: LOAD_DETAILS_REQUESTED,
  };
};

export const loadDetailsSuccess = (entrepreneur) => {
  return {
    type: LOAD_DETAILS_SUCCESS,
    payload: entrepreneur,
  };
};

const loadDetailsFailed = (error) => {
  return {
    type: LOAD_DETAILS_FAILED,
    payload: error,
  };
};

export const loadDetails = (id) => {
  const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
  return (dispatch) => {
    dispatch(loadDetailsRequested());

    fetch(`${entrepreneursApi}/${id}`)
      .then((response) => response.json())
      .then((entrepreneur) => {
        dispatch(loadDetailsSuccess(entrepreneur));
      })
      .catch((error) => {
        dispatch(loadDetailsFailed(error));
      });
  };
};
