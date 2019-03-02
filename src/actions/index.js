import {
  FETCH_NOTE,
  FETCH_NOTES,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SORT_BY_LENGTH
} from "./types";
import axios from "axios";

// the actions right here, they will be async
export const fetchNotes = () => async dispatch => {
  const res = await axios.get("https://fe-notes.herokuapp.com/note/get/all");
  // console.log(res.data);
  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const fetchNote = id => async dispatch => {
  const res = await axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`);
  //   console.log(res.data);
  dispatch({ type: FETCH_NOTE, payload: res.data });
};

export const createNote = formValues => async dispatch => {
  console.log(formValues);
  await axios.post(`https://fe-notes.herokuapp.com/note/create`, formValues);
  dispatch({ type: CREATE_NOTE });
};

export const editNote = (id, formValues) => async dispatch => {
  console.log(formValues);
  const res = await axios.put(
    `https://fe-notes.herokuapp.com/note/edit/${id}`,
    formValues
  );
  console.log(res.data);
  dispatch({ type: EDIT_NOTE, payload: res.data });
};

export const deleteNote = id => async dispatch => {
  await axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`);
  dispatch({ type: DELETE_NOTE, payload: id });
};

export const sortByLength = arr => dispatch => {
  const data = arr
    .map(val => ({ ...val, length: val.textBody.length }))
    .sort((a, b) => a.length - b.length)
    .reverse()
    .map(val => ({
      _id: val._id,
      title: val.title,
      tags: val.tags,
      textBody: val.textBody
    }));

  dispatch({ type: SORT_BY_LENGTH, payload: data });
};
