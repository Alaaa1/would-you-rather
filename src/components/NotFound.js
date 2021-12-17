import React, { Component } from "react";
import Navbar from "./Navbar";

class NotFound extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <h3 style={{ color: "red" }}>
            Oops! Sorry This Page Was Not Found. Please double Check the entered
            Url
          </h3>
        </div>
      </>
    );
  }
}

export default NotFound;
