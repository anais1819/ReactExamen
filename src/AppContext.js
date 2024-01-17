 
import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  events: [],
  
};

export const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) { 
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
