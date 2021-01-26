import React from "react";
import {auth} from '../firebase'
import { Route, Redirect } from "react-router-dom";
import {  Alert } from 'rsuite';

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
    const user = auth.currentUser;
    console.log(user);
  return (
    <Route
      {...rest}
      render={props => {
        if (user !== null) {
            console.log('im null');
          return <Component {...props} />;
        } else {
            console.log('im not null');
          return (
              <div>
                {/* {Alert.error('You are not logged in', 5000)} */}
                <Redirect
                to={{
                    pathname: "/login",
                    state: {
                    from: props.location
                    }
                }}
                />
            </div>
          );
        }
      }}
    />
  );
};