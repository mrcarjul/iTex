import axios from 'axios';

const API_URL = 'https://us-central1-app-tiendita.cloudfunctions.net';

/**
 * Manages the axios  api call instance creation and returns the available endpoints
 * @param {string} baseURL Url to be used for api calls
 */
const create = (baseURL = API_URL) => {
  const api = axios.create({
    baseURL,
    timeout: 25000,
  });

  /**
   * @description Sends api call to retrive employee data by given id
   * @param {number} employeeId
   */
  const getEmployeeData = (employeeId) =>
    api.get(`/simpleExerciseTest?id=${employeeId}`);

  return {
    getEmployeeData,
  };
};

const API = create();

export default API;
