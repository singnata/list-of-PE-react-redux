import { 
  LOAD_ENTREPRENEURS_REQUESTED, 
  LOAD_ENTREPRENEURS_SUCCESS, 
  LOAD_ENTREPRENEURS_FAILED 
} from '../actions/actionTypes';

const initialState = {
  isLoaded: false,
  error: null,
  entrepreneurs: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ENTREPRENEURS_REQUESTED:
      return { ...state, isLoaded: false, error: null };
    case LOAD_ENTREPRENEURS_SUCCESS:
      return { ...state, entrepreneurs: action.payload, isLoaded: true };
    case LOAD_ENTREPRENEURS_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default list;
