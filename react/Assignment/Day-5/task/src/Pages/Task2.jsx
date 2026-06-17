import React, { Component } from "react";

class Task2 extends Component {
  constructor() {
    super();
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Render Method Called");

    return (
      <div>
        <h1>Lifecycle Methods Example</h1>
      </div>
    );
  }
}

export default Task2;