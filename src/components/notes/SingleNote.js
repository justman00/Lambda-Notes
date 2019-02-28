import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNote } from "../../actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    fetchNote(match.params.id);
  }, []);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <SingleNoteStyled>
      <Title>{note.title}</Title>
      <BodyText>{note.textBody}</BodyText>

      <Link to={`/edit/${note._id}`}>Edit this note</Link>
      <Link to={`/delete/${note._id}`}>Delete this note</Link>
    </SingleNoteStyled>
  );
};

const mapStateToProps = (state, ownProps) => ({
  note: state.notes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchNote }
)(SingleNote);
