import React from "react";
import FormSubcomponent from "./FormSubcomponent";

import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { NOTES_QUERY } from "../notes/ListNotes";
import { SINGLE_NOTE_QUERY } from "../notes/SingleNote";

const UPDATE_NOTE_MUTATION = gql`
  mutation updateNote($id: ID!, $title: String!, $body: String!) {
    updateNote(id: $id, data: { title: $title, body: $body }) {
      id
    }
  }
`;

const EditForm = props => {
  return (
    <Query query={SINGLE_NOTE_QUERY} variables={{ id: props.match.params.id }}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading) {
          return <div>Loading...</div>;
        }

        return (
          <Mutation
            mutation={UPDATE_NOTE_MUTATION}
            refetchQueries={() => [
              { query: NOTES_QUERY },
              {
                query: SINGLE_NOTE_QUERY,
                variables: {
                  id: props.match.params.id
                }
              }
            ]}
          >
            {updateNote => {
              console.log(data);
              return (
                <FormSubcomponent
                  action={updateNote}
                  history={props.history}
                  typeOfForm={"Edit Your Note"}
                  textBody={data.note.title}
                  title={data.note.body}
                  buttonText={"Update"}
                  match={props.match}
                />
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default EditForm;
