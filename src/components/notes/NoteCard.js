import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 50px;

  h1 {
    font-size: 20px;
  }
`;

export default function NoteCard({ note }) {
  return (
    <Card>
      <h1>{note.title}</h1>
    </Card>
  );
}
