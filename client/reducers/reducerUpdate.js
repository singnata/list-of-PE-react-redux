import { 
  UPDATE_ENTREPRENEUR_REQUESTED, 
  UPDATE_ENTREPRENEUR_SUCCESS, 
  UPDATE_ENTREPRENEUR_FAILED 
} from '../actions/actionTypes';

const update = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ENTREPRENEUR_REQUESTED:
      return state;
    case UPDATE_ENTREPRENEUR_SUCCESS:
      return state;
    case UPDATE_ENTREPRENEUR_FAILED:
      return { ...state, isError: action.payload };

    default:
      return state;
  }
};

export default update;
