import React from "react";
import { Route } from "react-router-dom";
import ListNotes from "./notes/ListNotes";
import SideBar from "./sidebar/Sidebar";
import SingleNote from "./notes/SingleNote";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";
import "./App.css";
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SecondItem = styled.div`
  width: 80%;
  margin-left: 20%;
`;

const App = () => {
  return (
    <MainLayout>
      <SideBar />
      <SecondItem>
        <Route path="/" exact component={ListNotes} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/create" component={CreateForm} />
        <Route path="/edit/:id" component={EditForm} />
        <Route path="/delete/:id" component={DeleteForm} />
      </SecondItem>
    </MainLayout>
  );
};

export default App;
