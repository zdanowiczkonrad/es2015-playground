import React from "react";

export default class Greeter extends React.Component {
    render() {
         return (
              <div className="greeting">
                Hello, {this.props.name}!
              </div>
            );
    }
}
