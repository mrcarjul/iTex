import {
  REQUEST_EMPLOYEE_DATA,
  REQUEST_EMPLOYEE_DATA_FAILURE,
  SET_EMPLOYEE_DATA,
} from '../actions/employee';

const initialState = {
  payload: null,
  error: null,
  errorMsg: null,
  fetching: null,
};

export default function employee(state = initialState, action) {
  switch (action.type) {
    case REQUEST_EMPLOYEE_DATA:
      return {
        ...state,
        fetching: true,
        error: null,
        errorMsg: null,
      };
    case SET_EMPLOYEE_DATA:
      return {
        ...state,
        payload: action.payload,
        fetching: false,
        error: null,
        errorMsg: null,
      };
    case REQUEST_EMPLOYEE_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
}
