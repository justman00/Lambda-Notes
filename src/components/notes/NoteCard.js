import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  margin: 30px;
  width: 28%;
  padding: 15px;
  border: 1px solid gray;

  h1 {
    font-size: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid lightgray;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.25;
    height: 200px;
    overflow: hidden;
    padding-top: 2rem;
  }
`;

export default function NoteCard({ note }) {
  return (
    <Card>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/note/${note._id}`}
      >
        <h1>{note.title}</h1>
        <p>{note.textBody}</p>
      </Link>
    </Card>
  );
}
