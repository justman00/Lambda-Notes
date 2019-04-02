import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "login": {
      return { ...state, isLoggedIn: true };
    }
    case "logout": {
      return { ...state, isLoggedIn: false };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  isLoggedIn: false
};

export const Context = React.createContext();

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
