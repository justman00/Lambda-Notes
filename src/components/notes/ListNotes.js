import React from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

const ListNotes = props => {
  props.fetchNotes();
  return <h1>List of Notes</h1>;
};

export default connect(
  null,
  { fetchNotes }
)(ListNotes);
