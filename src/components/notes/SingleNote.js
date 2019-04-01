import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNote } from "../../actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Query } from "react-apollo";
import gql from "graphql-tag";

export const SINGLE_NOTE_QUERY = gql`
  query SingleNote($id: ID!) {
    note(query: $id) {
      id
      body
      title
    }
  }
`;

const SingleNoteStyled = styled.section`
  margin: 50px;

  a {
    padding: 15px 20px;
    background: aqua;
    color: white;
    text-decoration: none;
    font-size: 2rem;
    border-radius: 10px;

    &:last-child {
      margin-left: 50px;
      background: red;
    }
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: sans-serif;
`;

const BodyText = styled.p`
  font-size: 1.6rem;
  line-height: 1.25;
  margin: 50px 0;
`;

const SingleNote = ({ match, fetchNote, note }) => {
  // useEffect(() => {
  //   fetchNote(match.params.id);
  // }, []);

  // if (!note) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Query query={SINGLE_NOTE_QUERY} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (error) {
          console.log(error);
        }

        console.log(data);

        return (
          <SingleNoteStyled>
            <Title>{data.note.title}</Title>
            <BodyText>{data.note.body}</BodyText>

            <Link to={`/edit/${data.note.id}`}>Edit this note</Link>
            <Link to={`/delete/${data.note.id}`}>Delete this note</Link>
          </SingleNoteStyled>
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
  { fetchNote }
)(SingleNote);
