import React from "react";
import { Route, Redirect } from "react-router-dom";
import ListNotes from "./notes/ListNotes";
import SideBar from "./sidebar/Sidebar";
import SingleNote from "./notes/SingleNote";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";
import "./App.css";
import styled from "styled-components";
import Login from "./auth/Login";
import Provider from "./context";
import Register from "./auth/Register";
import { Context } from "./context";

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
    <Provider>
      <MainLayout>
        <Context.Consumer>
          {val => {
            if (val.state.isLoggedIn) {
              return <SideBar />;
            }
            return null;
          }}
        </Context.Consumer>
        <Context.Consumer>
          {val => {
            return (
              <SecondItem>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route
                  path="/"
                  exact
                  render={props => {
                    return checkForAuth(ListNotes, val.state.isLoggedIn, props);
                  }}
                />
                <Route
                  path="/note/:id"
                  render={props => {
                    return checkForAuth(
                      SingleNote,
                      val.state.isLoggedIn,
                      props
                    );
                  }}
                />
                <Route
                  path="/create"
                  render={props => {
                    return checkForAuth(
                      CreateForm,
                      val.state.isLoggedIn,
                      props
                    );
                  }}
                />
                <Route
                  path="/edit/:id"
                  render={props => {
                    return checkForAuth(EditForm, val.state.isLoggedIn, props);
                  }}
                />
                <Route
                  path="/delete/:id"
                  render={props => {
                    return checkForAuth(
                      DeleteForm,
                      val.state.isLoggedIn,
                      props
                    );
                  }}
                />
                <Route
                  path="/delete/:id"
                  render={props => {
                    return checkForAuth(
                      SingleNote,
                      val.state.isLoggedIn,
                      props
                    );
                  }}
                />
              </SecondItem>
            );
          }}
        </Context.Consumer>
      </MainLayout>
    </Provider>
  );
};

function checkForAuth(Component, loggedIn, props) {
  if (loggedIn) {
    return <Component {...props} />;
  }
  return <Redirect to="/login" />;
}

export default App;
