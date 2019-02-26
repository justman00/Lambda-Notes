import React from "react";
import { withFormik, Field, Form } from "formik";
import { connect } from "react-router-dom";
import { createNote } from "../../actions";
import * as yup from "yup";

const FormSubcomponent = ({ values, errors, touched, handleChange }) => {
  return (
    <Form>
      <Field name="title" placeholder="Title" />{" "}
      <textarea
        name="textBody"
        cols="30"
        rows="10"
        onChange={handleChange}
        placeholder="Your note goes here"
        value={values.textBody}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ title, textBody }) {
    return {
      title,
      textBody
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
