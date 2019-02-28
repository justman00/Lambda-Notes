import React from "react";
import { withFormik, Field, Form } from "formik";
import { connect } from "react-router-dom";
import { createNote } from "../../actions";
import * as yup from "yup";

import "../App.css";

const FormSubcomponent = ({
  values,
  errors,
  touched,
  handleChange,
  typeOfForm
}) => {
  return (
    <Form>
      <h2 className="form-title">{typeOfForm}</h2>
      <Field className="input-main" name="title" placeholder="Title" />{" "}
      <textarea
        name="textBody"
        cols="40"
        rows="15"
        onChange={handleChange}
        placeholder="Your note goes here"
        value={values.textBody}
        className="textarea-main"
      />
      <button className="btn-submit" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    console.log(props);
    return {
      title: props.title,
      textBody: props.textBody
    };
  },
  validationSchema: yup.object().shape({
    title: yup.string().required("You must enter a title"),
    textBody: yup.string().required("Enter your note please")
  }),
  handleSubmit({ title, textBody }, { props }) {
    props.action({ title, textBody });
  }
})(FormSubcomponent);
