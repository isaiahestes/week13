// Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
import { Button } from "bootstrap";
import React from "react";

export default class LoginForm extends React.Component{
  render(){
    return(
      // the visual for the form
      <div className="login-form">
        <h3>Log In</h3>
        <input type="text" placeholder="Username" />{" "}
        <input type="password" placeholder="Password" />{" "}
        <button>Login</button>
      </div>
    );
  }
}