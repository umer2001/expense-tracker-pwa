export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSECTION":
      return {
        ...state,
        transections: state.transections.filter(
          (transection) => transection.id !== action.payload
        ),
      };
    case "ADD_TRANSECTION":
      return {
        ...state,
        transections: [action.payload, ...state.transections],
      };
    case "LOAD_PREV_TRANSECTIONS":
      return {
        ...state,
        transections: JSON.parse(localStorage.getItem("transections")),
      };
    default:
      return state;
  }
};
