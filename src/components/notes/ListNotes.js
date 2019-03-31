import React, { useEffect, useState } from "react";
import { fetchNotes, sortByLength } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const NOTES_QUERY = gql`
  query NOTES_QUERY {
    notes {
      id
      title
      body
    }
  }
`;

const List = styled.section`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
`;

const MainText = styled.h2`
  font-size: 3.4rem;
  margin: 50px 50px 20px;
  font-family: sans-serif;
  font-weight: 600;
`;

const Sorting = styled.div`
  margin-left: 50px
  margin-top: 40px;
  display: flex;
  align-items: baseline

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    font-family: sans-serif;
  }
`;

const ButtonsDiv = styled.div`
  margin-left: 50px;
`;

const Button = styled.button`
  font-size: 2rem;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  margin-right: 25px;
  background: darkturquoise;
  color: white;
  font-family: sans-serif;
  text-align: center;

  &:focus {
    background: cadetblue;
  }
`;

// const MainContent = styled.div`
//   margin-left: 20%;
// `;

const ListNotes = props => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // console.log("changing");
    props.fetchNotes();
  }, []);

  function handleChange(e) {
    setValue(e.target.value);
  }

  if (props.allNotes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Query query={NOTES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading</div>;
        }
        if (error) {
          console.log(error);
        }
        console.log(data);

        return (
          <>
            <MainText>Your Notes:</MainText>
            <SearchBar value={value} handleChange={handleChange} />
            <Sorting>
              <h3>Sort by:</h3>
              <ButtonsDiv>
                <Button onClick={() => props.sortByLength(data.notes)}>
                  Length
                </Button>
                <Button onClick={() => props.fetchNotes()}>Default</Button>
              </ButtonsDiv>
            </Sorting>

            <List>
              {data.notes
                .filter(val => {
                  // console.log(val.title);
                  return val.title.toLowerCase().includes(value.toLowerCase());
                })
                .map(note => {
                  return <NoteCard key={note.id} note={note} />;
                })}
            </List>
          </>
        );
      }}
    </Query>
  );
};

const mapStateToProps = state => ({
  allNotes: Object.values(state.notes)
});

export default connect(
  mapStateToProps,
  { fetchNotes, sortByLength }
)(ListNotes);
