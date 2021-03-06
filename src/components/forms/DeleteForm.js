import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { deleteNote, fetchNote } from "../../actions";

const DeleteForm = props => {
  useEffect(() => {
    props.fetchNote(props.match.params.id);
  }, []);

  console.log(props.history);

  function onDismiss(e) {
    e.stopPropagation();
    props.history.goBack();
  }

  function onDelete() {
    props.deleteNote(props.match.params.id).then(() => props.history.push("/"));
  }
  // console.log(props.note);
  if (!props.note) {
    return <div>Loading...</div>;
  }
  return (
    <Modal title={props.note.title} onDelete={onDelete} onDismiss={onDismiss} />
  );
};

const mapStateToProps = (state, ownProps) => ({
  note: state.notes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { deleteNote, fetchNote }
)(DeleteForm);
