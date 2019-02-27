import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

const StyledSidebar = styled.nav`
  width: 20%;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin: 50px 0;
`;

const SideBar = () => {
  return (
    <StyledSidebar>
      <Name>Lambda Notes</Name>
      <Link className="btn" to="/">
        View Your Notes
      </Link>
      <Link className="btn" to="/create">
        + Create a New Note
      </Link>
    </StyledSidebar>
  );
};

export default SideBar;
