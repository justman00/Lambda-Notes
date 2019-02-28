import { combineReducers } from "redux";
import {
  FETCH_NOTE,
  FETCH_NOTES,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SORT_BY_LENGTH
} from "../actions/types";

const notesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      const newState = {};
      action.payload.map(note => (newState[note._id] = note));
      return { ...newState };
    case FETCH_NOTE:
      return { [action.payload._id]: action.payload };
    case CREATE_NOTE:
      return { ...state };
    case EDIT_NOTE:
      return { [action.payload._id]: action.payload };
    case DELETE_NOTE:
      const withoutDeleted = {};
      Object.keys(state).forEach(key => {
        if (key !== action.payload) {
          withoutDeleted[key] = state[key];
        }
      });
      return { ...withoutDeleted };
    case SORT_BY_LENGTH:
      return { ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  notes: notesReducer
});
