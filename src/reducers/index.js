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
      return { ...state, ...newState };
    case FETCH_NOTE:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_NOTE:
      return { ...state };
    case EDIT_NOTE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_NOTE:
      const withoutDeleted = {};
      Object.keys(state).forEach(key => {
        if (key !== action.payload) {
          withoutDeleted[key] = state[key];
        }
      });
      return { ...withoutDeleted };
    case SORT_BY_LENGTH:
      const newState2 = {};
      action.payload.map(note => (newState2[note._id] = note));
      return { ...newState2, ...state };
    default:
      return state;
  }
};

export default combineReducers({
  notes: notesReducer
});
