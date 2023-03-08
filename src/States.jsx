import React from "react";

class States extends React.Component{
  constructor(){
    super();
    this.state = {
      message: "Hello form the side"
    }
  }
  render(){
    return (
      <h1>{this.state.message}</h1>
    )
  }
}

export default States;