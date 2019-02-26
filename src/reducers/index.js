import { combineReducers } from "redux";

const notesReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  notes: notesReducer
});
