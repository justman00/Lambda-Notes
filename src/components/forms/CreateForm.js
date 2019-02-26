import React from "react";
import FormSubcomponent from "./FormSubcomponent";
import { connect } from "react-redux";
import { createNote } from "../../actions";

const CreateForm = props => {
  return <FormSubcomponent history={props.history} action={props.createNote} />;
};

export default connect(
  null,
  { createNote }
)(CreateForm);
