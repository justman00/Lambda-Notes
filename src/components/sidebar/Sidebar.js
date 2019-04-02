import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { Context } from "../context";

const StyledSidebar = styled.nav`
  width: 20%;
  background: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: fixed;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin: 50px 0;
  font-family: sans-serif;
  font-weight: 600;
  text-align: center;
`;

const SideBar = props => {
  const [titles, setTitles] = useState([]);
  const [texts, setTexts] = useState([]);
  const ctx = useContext(Context);

  console.log("Context is here", ctx);

  useEffect(() => {
    if (props.allNotes.length > 0) {
      const allTitles = props.allNotes.map(note => note.title);
      const allTexts = props.allNotes.map(note => note.textBody);
      setTitles(allTitles);
      setTexts(allTexts);
      console.log("working");
    }
  }, [props.allNotes.length]);

  const rows = [titles, texts];
  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
  let encodedUri = encodeURI(csvContent);

  return (
    <StyledSidebar>
      <Name>Lambda Notes</Name>
      <Link className="btn" to="/">
        View Your Notes
      </Link>
      <Link className="btn" to="/create">
        + Create a New Note
      </Link>
      <a className="btn" href={`${encodedUri}`} download={"lambda_notes.csv"}>
        Export to CSV
      </a>
    </StyledSidebar>
  );
};

const mapStateToProps = state => ({
  allNotes: Object.values(state.notes)
});

export default connect(mapStateToProps)(SideBar);
