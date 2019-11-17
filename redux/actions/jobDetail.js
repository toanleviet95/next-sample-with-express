export const actionTypes = {
  LOAD_DETAIL_DATA: 'LOAD_DETAIL_DATA',
  LOAD_DETAIL_DATA_SUCCESS: 'LOAD_DETAIL_DATA_SUCCESS',
  LOAD_DETAIL_DATA_FAILURE: 'LOAD_DETAIL_DATA_FAILURE',
  RESET_DETAIL_DATA: 'RESET_DETAIL_DATA',
};

export function loadData (jobId) {
  return { type: actionTypes.LOAD_DETAIL_DATA, params: { jobId } };
};

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DETAIL_DATA_SUCCESS,
    data,
  };
};

export function loadDataFailure (error) {
  return {
    type: actionTypes.LOAD_DETAIL_DATA_FAILURE,
    error,
  };
};

export function resetData () {
  return { type: actionTypes.RESET_DETAIL_DATA };
};
