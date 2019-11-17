import { actionTypes } from '@/redux/actions/jobDetail';

export const initialState = {
  loading: false,
  job: {},
  error: {},
};

function jobDetail (state = initialState, { type, data, error }) {
  switch (type) {
    case actionTypes.LOAD_DETAIL_DATA:
      return {
        ...state,
        ...{
          loading: true,
        },
      };

    case actionTypes.LOAD_DETAIL_DATA_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          job: data,
        },
      };
    
    case actionTypes.LOAD_DETAIL_DATA_FAILURE:
      return {
        ...state,
        ...{ error, loading: false },
      };

    case actionTypes.RESET_DETAIL_DATA:
      return {
        ...state,
        ...{ job: {}, error: {} },
      };

    default:
      return state;
  }
}

export default jobDetail;
