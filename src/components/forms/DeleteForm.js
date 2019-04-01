import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { deleteNote, fetchNote } from "../../actions";

import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { SINGLE_NOTE_QUERY } from "../notes/SingleNote";
import { NOTES_QUERY } from "../notes/ListNotes";

const DELETE_NOTE_MUTATION = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`;

const DeleteForm = props => {
  // useEffect(() => {
  //   props.fetchNote(props.match.params.id);
  // }, []);

  // console.log(props.history);

  function onDismiss(e) {
    e.stopPropagation();
    props.history.goBack();
  }

  // function onDelete() {
  //   props.deleteNote(props.match.params.id).then(() => props.history.push("/"));
  // }
  // // console.log(props.note);
  // if (!props.note) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Query query={SINGLE_NOTE_QUERY} variables={{ id: props.match.params.id }}>
      {({ data, loading, error }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        return (
          <Mutation
            mutation={DELETE_NOTE_MUTATION}
            refetchQueries={data => [{ query: NOTES_QUERY }]}
          >
            {deleteNote => {
              function onDelete() {
                deleteNote({
                  variables: {
                    id: data.note.id
                  }
                }).then(() => props.history.push("/"));
              }

              return (
                <Modal
                  title={data.note.title}
                  onDelete={onDelete}
                  onDismiss={onDismiss}
                />
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

const mapStateToProps = (state, ownProps) => ({
  note: state.notes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { deleteNote, fetchNote }
)(DeleteForm);
