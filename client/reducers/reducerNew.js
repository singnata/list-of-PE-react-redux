import { 
  SAVE_ENTREPRENEUR_REQUESTED, 
  SAVE_ENTREPRENEUR_SUCCESS, 
  SAVE_ENTREPRENEUR_FAILED,
  REDIRECT_TO_HOME_AFTER_SAVE
} from '../actions/actionTypes';

const initialState = {
  error: null,
};

const newEntr = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ENTREPRENEUR_REQUESTED:
      return { ...state, error: null};
    case SAVE_ENTREPRENEUR_SUCCESS:
      return state;
    case SAVE_ENTREPRENEUR_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default newEntr;
