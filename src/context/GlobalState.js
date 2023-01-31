
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// a reducer in redux is how we specify the application state changes in response to certain actions 
// Initial state
const initialState = {
  transactions: []
}

// Create context
//in order for other components to have access to global state we need to have a provider, so all components need to be wrapped ina provider component 
//So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}
















