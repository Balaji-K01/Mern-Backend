import { Component } from "react";

class Task1 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div className="flex justify-center flex-col m-auto p-10">
          <h1>Value count {this.state.count}</h1>
          <button
            onClick={this.inc}
            className="p-2 bg-black text-white rounded border w-20"
          >
            count +
          </button>
        </div>
      </>
    );
  }
}

export default Task1;
