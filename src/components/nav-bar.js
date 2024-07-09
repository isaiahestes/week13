// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from "react";

export default class Nav extends React.Component{
  render(){
    return(
      // the visual for the navbar
      <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Home</a>
            <a className="navbar-brand text-white" href="#">Gallery</a>
          </div>
        </nav>
    );
  }
}