import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replace( "/");
    // this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" className="btn btn-danger">archives</Link>
        <Link to="settings"><button className="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}