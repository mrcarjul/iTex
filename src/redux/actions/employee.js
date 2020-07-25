import API from '../../services/EmployeesApi';

export const REQUEST_EMPLOYEE_DATA = 'REQUEST_EMPLOYEE_DATA';
export const REQUEST_EMPLOYEE_DATA_FAILURE = 'REQUEST_EMPLOYEE_DATA_FAILURE';
export const SET_EMPLOYEE_DATA = 'SET_EMPLOYEE_DATA';

export const requestData = () => ({type: REQUEST_EMPLOYEE_DATA});
export const requestDataFailure = () => ({type: REQUEST_EMPLOYEE_DATA_FAILURE});
export const setEmployeeData = (payload) => ({
  type: SET_EMPLOYEE_DATA,
  payload,
});

const defaultErrorMsg =
  'Im sorry, could not retrive any data for the moment please try again later';

export const requestEmployeeData = (employeeId) => async (dispatch) => {
  try {
    await dispatch(requestData());
    const response = await API.getEmployeeData(employeeId);
    if (response?.status === 200 && response?.data?.length > 0) {
      await dispatch(setEmployeeData(response.data[0]));
    } else if (response?.status === 200 && response?.data?.length === 0) {
      await dispatch(requestDataFailure('No data for given employee id'));
    } else {
      await dispatch(requestDataFailure(defaultErrorMsg));
    }
  } catch (error) {
    await dispatch(requestDataFailure(defaultErrorMsg));
  }
};
