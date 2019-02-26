import React, { useEffect } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NoteCard from "./NoteCard";

const List = styled.section`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-about;
`;

const ListNotes = props => {
  console.log(props);
  useEffect(() => {
    props.fetchNotes();
  }, []);

  if (props.allNotes.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <List>
      {props.allNotes.map(note => {
        return <NoteCard key={note._id} note={note} />;
      })}
    </List>
  );
};

const mapStateToProps = state => ({
  allNotes: Object.values(state.notes)
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(ListNotes);
