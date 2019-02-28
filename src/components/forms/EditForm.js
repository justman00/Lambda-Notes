import React from "react";
import { connect } from "react-redux";
import FormSubcomponent from "./FormSubcomponent";
import { editNote } from "../../actions";

const EditForm = props => {
  function onSubmit(formValues) {
    props
      .editNote(props.match.params.id, formValues)
      .then(() => props.history.push("/"));
  }

  return (
    <FormSubcomponent
      action={onSubmit}
      history={props.history}
      typeOfForm={"Edit Your Note"}
    />
  );
};

export default connect(
  null,
  { editNote }
)(EditForm);
