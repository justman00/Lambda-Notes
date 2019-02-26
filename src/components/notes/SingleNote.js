import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNote } from "../../actions";

const SingleNote = ({ match, fetchNote, note }) => {
  useEffect(() => {
    fetchNote(match.params.id);
  }, []);

  if (!note) {
    return <div>Loading...</div>;
  }

  return <h1>{note.title}</h1>;
};

const mapStateToProps = (state, ownProps) => ({
  note: state.notes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchNote }
)(SingleNote);
