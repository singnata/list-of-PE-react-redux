import {
  LOAD_ENTREPRENEURS_REQUESTED,
  LOAD_ENTREPRENEURS_SUCCESS,
  LOAD_ENTREPRENEURS_FAILED,
  DELETE_ENTREPRENEUR_REQUESTED,
  DELETE_ENTREPRENEUR_SUCCESS,
  DELETE_ENTREPRENEUR_FAILED,
  CANCELED_DELETE_ENTREPRENEUR,
} from './actionTypes';

const loadEntrepreneursRequested = () => {
  return {
    type: LOAD_ENTREPRENEURS_REQUESTED,
  };
};

const loadEntrepreneursSuccess = (entrepreneurs) => {
  return {
    type: LOAD_ENTREPRENEURS_SUCCESS,
    payload: entrepreneurs,
  };
};

const loadEntrepreneursFailed = (error) => {
  return {
    type: LOAD_ENTREPRENEURS_FAILED,
    payload: error,
  };
};

export const loadEntrepreneurs = () => {
  return (dispatch) => {
    dispatch(loadEntrepreneursRequested());

    fetch('http://localhost:3000/entrepreneurs')
      .then((response) => response.json())
      .then((entrepreneurs) => {
        dispatch(loadEntrepreneursSuccess(entrepreneurs));
      })
      .catch((error) => {
        dispatch(loadEntrepreneursFailed(error));
      });
  };
};

const deleteEntrepreneurRequested = () => {
  return {
    type: DELETE_ENTREPRENEUR_REQUESTED,
  };
};

const deleteEntrepreneurSuccess = () => {
  return {
    type: DELETE_ENTREPRENEUR_SUCCESS,
  };
};

const deleteEntrepreneurFailed = (error) => {
  return {
    type: DELETE_ENTREPRENEUR_FAILED,
    payload: error,
  };
};

const canceledDeleteEntrepreneur = () => {
  return {
    type: CANCELED_DELETE_ENTREPRENEUR,
  };
};

export const deleteEntrepreneur = (id, entrepreneur) => {
  const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
  return (dispatch) => {
    dispatch(deleteEntrepreneurRequested());
    if (confirm('Are You Sure You Want to Delete')) {
      fetch(`${entrepreneursApi}/${id}`, {
        method: 'delete',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify(entrepreneur),
      })
        .then(() => {
          dispatch(deleteEntrepreneurSuccess());
        })
        .then(() => {
          dispatch(loadEntrepreneurs());
        })
        .catch((error) => {
          dispatch(deleteEntrepreneurFailed(error));
        });
    } else {
      dispatch(canceledDeleteEntrepreneur());
    }
  };
};
