import React, { useEffect, useState } from "react";
import { fetchNotes, sortByLength } from "../../actions";
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
    // console.log("changing");
    props.fetchNotes();
  }, []);

  if (props.allNotes.length === 0) {
    return <div>Loading...</div>;
  }

  const onSort = (arr, type) => {
    props.sortByLength(arr);
  };
  console.log(props.allNotes);

  return (
    <>
      <MainText>Your Notes</MainText>
      <button onClick={() => onSort(props.allNotes)}>sort</button>
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

// sorting
// sorting algs
// I have no date in my database, therefore we have to improvise
const sortyByDate = arr => arr.reverse();

// sort by the length of the bodyText
const sortByLength2 = arr => {
  // a new array with many null values
  // use sort(a-b)
  return arr
    .map(val => ({ ...val, length: val.textBody.length }))
    .sort((a, b) => a.length - b.length)
    .reverse()
    .map(val => ({
      _id: val.id,
      title: val.title,
      tags: val.tags,
      textBody: val.textBody
    }));
};

export default connect(
  mapStateToProps,
  { fetchNotes, sortByLength }
)(ListNotes);
