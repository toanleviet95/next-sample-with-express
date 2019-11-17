import { actionTypes } from '@/redux/actions/jobList';

export const initialState = {
  loading: false,
  jobs: [],
  error: {},
};

function jobList (state = initialState, { type, data, error }) {
  switch (type) {
    case actionTypes.LOAD_DATA:
      return {
        ...state,
        ...{
          loading: true,
        },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          jobs: data,
        },
      };

    
    case actionTypes.LOAD_DATA_FAILURE:
      return {
        ...state,
        ...{ error, loading: false },
      };

    case actionTypes.RESET_DATA:
      return {
        ...state,
        ...{ jobs: [], error: {} },
      };

    default:
      return state;
  }
}

export default jobList;
