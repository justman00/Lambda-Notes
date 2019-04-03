import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Context } from "../context";

function Login(props) {
  const ctx = useContext(Context);

  return (
    <Mutation mutation={LOGIN_MUTATION}>
      {(login, { data, loading }) => {
        function authAction(email, password) {
          const variables = {
            variables: {
              email,
              password
            }
          };
          login(variables);
        }

        if (data && !ctx.state.userId) {
          localStorage.setItem("lambdaNotes", data.login.token);
          ctx.dispatch({ type: "login", payload: data.login.user.id });
        }

        if (ctx.state.isLoggedIn) {
          props.history.push("/");
        }

        return <AuthForm authAction={authAction} history={props.history} />;
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
