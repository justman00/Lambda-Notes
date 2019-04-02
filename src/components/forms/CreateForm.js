import React from "react";
import FormSubcomponent from "./FormSubcomponent";

// graphql
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
            match={props.match}
          />
        );
      }}
    </Mutation>
  );
};

export default CreateForm;
