import React from "react";
import AuthForm from "./AuthForm";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

function Login(props) {
  return (
    <Mutation mutation={LOGIN_MUTATION}>
      {(login, { data }) => {
        function authAction(email, password) {
          const variables = {
            variables: {
              email,
              password
            }
          };
          login(variables);
        }
        if (data) {
          localStorage.setItem("lambdaNotes", data.login.token);
        }

        return <AuthForm authAction={authAction} />;
      }}
    </Mutation>
  );
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { password: $password, email: $email }) {
      token
      user {
        id
      }
    }
  }
`;

export default Login;
