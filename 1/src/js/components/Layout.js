import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor() {
        super();    // обязательно вызывать в конструкторе
        this.state = {
            title: "Welcome"
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
        );
    }
}