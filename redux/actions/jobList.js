export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE: 'LOAD_DATA_FAILURE',
  RESET_DATA: 'RESET_DATA',
};

export function loadData (params) {
  return { type: actionTypes.LOAD_DATA, params };
};

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
};

export function loadDataFailure (error) {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    error,
  };
};

export function resetData () {
  return { type: actionTypes.RESET_DATA };
};

