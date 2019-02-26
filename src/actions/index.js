import {
  FETCH_NOTE,
  FETCH_NOTES,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE
} from "./types";
import axios from "axios";

// the actions right here, they will be async
export const fetchNotes = () => async dispatch => {
  const res = await axios.get("https://fe-notes.herokuapp.com/note/get/all");
  console.log(res.data);
  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const fetchNote = id => async dispatch => {
  const res = await axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`);
  //   console.log(res.data);
  dispatch({ type: FETCH_NOTE, payload: res.data });
};

export const createNote = formValues => async dispatch => {
  const res = await axios.post(
    `https://fe-notes.herokuapp.com/note/create`,
    formValues
  );
  console.log(res);
  dispatch({ type: CREATE_NOTE });
};

export const editNote = (id, formValues) => async dispatch => {
  const res = await axios.put(
    `https://fe-notes.herokuapp.com/note/edit/${id}`,
    formValues
  );
  dispatch({ type: EDIT_NOTE, payload: res.data });
};

export const deleteNote = id => async dispatch => {
  await axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`);
  dispatch({ type: DELETE_NOTE, payload: id });
};
