import React, { useEffect } from "react";
import { connect } from "react-redux";
import FormSubcomponent from "./FormSubcomponent";
import { editNote, fetchNote } from "../../actions";

const EditForm = props => {
  function onSubmit(formValues) {
    props
      .editNote(props.match.params.id, formValues)
      .then(() => props.history.goBack());
  }

  // console.log(props.match.params.id);

  useEffect(() => {
    props.fetchNote(props.match.params.id);
  }, []);

  // console.log(props.note);

  if (!props.note) {
    return <div>Loading...</div>;
  }

  return (
    <FormSubcomponent
      action={onSubmit}
      history={props.history}
      typeOfForm={"Edit Your Note"}
      textBody={props.note.textBody}
      title={props.note.title}
      buttonText={"Update"}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  note: state.notes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { editNote, fetchNote }
)(EditForm);
