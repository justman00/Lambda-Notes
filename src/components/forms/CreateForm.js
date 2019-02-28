import React from "react";
import FormSubcomponent from "./FormSubcomponent";
import { connect } from "react-redux";
import { createNote } from "../../actions";

const CreateForm = props => {
  function onSubmit(formValues) {
    props.createNote(formValues).then(() => props.history.push("/"));
  }

  return (
    <FormSubcomponent
      history={props.history}
      action={onSubmit}
      typeOfForm={"Add a New Note"}
    />
  );
};

export default connect(
  null,
  { createNote }
)(CreateForm);
