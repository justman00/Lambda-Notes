import React, { useEffect, useState } from "react";
import { fetchNotes, sortByLength } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

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
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("changing");
    props.fetchNotes();
  }, []);

  function handleChange(e) {
    setValue(e.target.value);
  }

  if (props.allNotes.length === 0) {
    return <div>Loading...</div>;
  }

  // const onSort = (arr, type) => {
  //   if (type === "Length") {
  //     props.sortByLength(arr);
  //   } else if (type === "Default") {
  //     console.log("da");
  //     props.fetchNotes();
  //   }
  // };
  // console.log(props.allNotes);

  return (
    <>
      <MainText>Your Notes</MainText>
      <SearchBar value={value} handleChange={handleChange} />
      <button onClick={() => props.sortByLength(props.allNotes)}>Length</button>
      <button onClick={() => props.fetchNotes()}>Default</button>
      <List>
        {props.allNotes
          .filter(val => {
            console.log(val.title);
            return val.title.toLowerCase().includes(value.toLowerCase());
          })
          .map(note => {
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
  { fetchNotes, sortByLength }
)(ListNotes);
