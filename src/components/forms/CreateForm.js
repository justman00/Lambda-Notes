import React from "react";
import FormSubcomponent from "./FormSubcomponent";
import { connect } from "react-redux";
import { createNote } from "../../actions";
import { NOTES_QUERY } from "../notes/ListNotes";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CREATE_NOTE_MUTATION = gql`
  mutation createNote($title: String!, $body: String!, $tags: [String!]) {
    createNote(data: { title: $title, body: $body, tags: $tags }) {
      id
    }
  }
`;

const CreateForm = props => {
  // function onSubmit(formValues) {
  //   props.createNote(formValues).then(() => props.history.push("/"));
  // }

  return (
    <Mutation
      mutation={CREATE_NOTE_MUTATION}
      refetchQueries={data => [{ query: NOTES_QUERY }]}
    >
      {(createNote, { data }) => {
        console.log(createNote);

        console.log(data);

        return (
          <FormSubcomponent
            history={props.history}
            action={createNote}
            typeOfForm={"Add a New Note"}
            buttonText={"Create"}
          />
        );
      }}
    </Mutation>
  );
};

export default connect(
  null,
  { createNote }
)(CreateForm);
