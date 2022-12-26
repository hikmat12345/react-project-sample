const initialState = {
  error: null,
  loading: false,
  data: [], 
};

const GridSamplePageReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GRID_REQUEST":
      return { ...state, loading: true };
    case "GRID_RESPONSE":
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case "GRID_ERROR":
      return { loading: false, error: payload };
 
    default:
      return state;
  }
};

export default GridSamplePageReducer;
