import React from "react";
import SubComp from "./subcomp";

export default class Original extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      a: "this is the a variable"
    }
  }

  render(){
    return(
      <div>
        hello from original component
        <br />
        {this.state.a}
        <br />
        <SubComp 
          b={this.state.a}
        />
      </div>
    )
  }
}