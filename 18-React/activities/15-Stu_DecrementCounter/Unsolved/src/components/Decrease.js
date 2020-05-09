import React from "react";

class Decrease extends React.Component {
  state = {
    count: 0
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }; 

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Decrease;