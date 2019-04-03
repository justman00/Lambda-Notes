import React, { useState } from "react";
import styled from "styled-components";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

import gql from "graphql-tag";
import { Query } from "react-apollo";

export const NOTES_QUERY = gql`
  query NOTES_QUERY {
    myNotes {
      id
      title
      body
    }
  }
`;

const sortByLength = arr => {
  return arr
    .map(val => ({ ...val, length: val.body.length }))
    .sort((a, b) => a.length - b.length)
    .reverse()
    .map(val => ({
      id: val.id,
      title: val.title,
      tags: val.tags,
      body: val.body
    }));
};

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

const ListNotes = props => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Query query={NOTES_QUERY}>
      {({ loading, error, data, refetch }) => {
        if (loading) {
          return <div>Loading</div>;
        }
        if (error) {
          console.log(error);
        }

        return (
          <>
            <MainText>Your Notes:</MainText>
            <SearchBar value={value} handleChange={handleChange} />
            <Sorting>
              <h3>Sort by:</h3>
              <ButtonsDiv>
                <Button onClick={() => sortByLength(data.myNotes)}>
                  Length
                </Button>
                <Button onClick={() => refetch()}>Default</Button>
              </ButtonsDiv>
            </Sorting>

            <List>
              {data.myNotes
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

export default ListNotes;
