import React from "react";

export default class SubComp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
        Hello from sub Component
        <br />
        {this.props.b}
      </div>
    )
  }
}