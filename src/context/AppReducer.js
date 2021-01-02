export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSECTION":
      var filteredList = state.transections.filter(
        (transection) => transection.id !== action.payload
      );
      localStorage.setItem("transections", JSON.stringify(filteredList));
      return {
        ...state,
        transections: filteredList,
      };
    case "ADD_TRANSECTION":
      var newList = [action.payload, ...state.transections];
      localStorage.setItem("transections", JSON.stringify(newList));
      return {
        ...state,
        transections: newList,
      };
    case "LOAD_PREV_TRANSECTIONS":
      var storedTransections = JSON.parse(localStorage.getItem("transections"));
      return {
        ...state,
        transections:
          storedTransections !== undefined && storedTransections !== null
            ? storedTransections
            : [],
      };
    default:
      return state;
  }
};
