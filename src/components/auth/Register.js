import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Context } from "../context";
import AuthForm from "./AuthForm";

function Register(props) {
  const ctx = useContext(Context);

  return (
    <Mutation mutation={CREATE_USER_MUTATION}>
      {(createUser, { data, loading }) => {
        function authAction(email, password, name) {
          const variables = {
            variables: {
              email,
              password,
              name
            }
          };
          createUser(variables);
        }

        if (data && !ctx.state.userId) {
          localStorage.setItem("lambdaNotes", data.createUser.token);
          ctx.dispatch({ type: "login", payload: data.createUser.user.id });
        }

        if (ctx.state.isLoggedIn) {
          props.history.push("/");
        }

        return (
          <AuthForm authAction={authAction} history={props.history} register />
        );
      }}
    </Mutation>
  );
}

const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(data: { email: $email, password: $password, name: $name }) {
      token
      user {
        id
      }
    }
  }
`;

export default Register;
