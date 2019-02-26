import React from "react";
import { Route } from "react-router-dom";
import ListNotes from "./notes/ListNotes";
import SideBar from "./sidebar/Sidebar";
import SingleNote from "./notes/SingleNote";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";

const App = () => {
  return (
    <>
      <SideBar />
      <Route path="/" exact component={ListNotes} />
      <Route path="/note/:id" component={SingleNote} />
      <Route path="/create" component={CreateForm} />
      <Route path="/edit/:id" component={EditForm} />
      <Route path="/delete/:id" component={DeleteForm} />
    </>
  );
};

export default App;
