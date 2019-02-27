import React, { useEffect } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NoteCard from "./NoteCard";

const List = styled.section`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
`;

const MainText = styled.h2`
  font-size: 3rem;
  margin: 50px;
  font-family: sans-serif;
`;

const ListNotes = props => {
  useEffect(() => {
    console.log("changing");
    props.fetchNotes();
  }, []);

  if (props.allNotes.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <MainText>Your Notes</MainText>
      <List>
        {props.allNotes.map(note => {
          return <NoteCard key={note._id} note={note} />;
        })}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  allNotes: Object.values(state.notes)
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(ListNotes);
