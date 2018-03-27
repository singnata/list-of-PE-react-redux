import { 
  LOAD_DETAILS_REQUESTED, 
  LOAD_DETAILS_SUCCESS, 
  LOAD_DETAILS_FAILED 
} from '../actions/actionTypes';

const initialState = {
  isLoaded: false,
  error: null,
  entrepreneur: {},
};

const details = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DETAILS_REQUESTED:
      return { ...state, isLoaded: false, error: null };
    case LOAD_DETAILS_SUCCESS:
      return { ...state, entrepreneur: action.payload, isLoaded: true };
    case LOAD_DETAILS_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default details;
