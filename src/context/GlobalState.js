import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transections: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  function deleteTransection(id) {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id,
    });
  }

  function addTransection(transection) {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: transection,
    });
  }

  function loadPrevTransections() {
    dispatch({
      type: "LOAD_PREV_TRANSECTIONS",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTransection,
        addTransection,
        loadPrevTransections,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
