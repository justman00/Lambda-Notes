import React from "react";
import { withFormik, Field, Form } from "formik";
import * as yup from "yup";

import "../App.css";

const FormSubcomponent = ({
  values,
  errors,
  touched,
  handleChange,
  typeOfForm,
  buttonText
}) => {
  return (
    <Form className="form">
      <h2 className="form-title">{typeOfForm}</h2>
      <div className="errors">
        {touched.title && errors.title && <p>{errors.title}</p>}
      </div>
      <Field
        autoComplete="off"
        className="input-main"
        name="title"
        placeholder="Title"
      />{" "}
      <div className="errors">
        {touched.textBody && errors.textBody && <p>{errors.textBody}</p>}
      </div>
      <textarea
        name="textBody"
        cols="70"
        rows="25"
        onChange={handleChange}
        placeholder="Your note goes here"
        value={values.textBody}
        className="textarea-main"
      />
      <button className="btn-submit" type="submit">
        {buttonText}
      </button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      title: props.title ? props.title : "",
      textBody: props.textBody ? props.textBody : ""
    };
  },
  validationSchema: yup.object().shape({
    title: yup.string().required("You must enter a title"),
    textBody: yup.string().required("Enter your note please")
  }),
  handleSubmit({ title, textBody }, { props }) {
    const body = textBody;

    props
      .action({
        variables: {
          title,
          body,
          id: props.match.params.id
        }
      })
      .then(() => props.history.push("/"));
  }
})(FormSubcomponent);
