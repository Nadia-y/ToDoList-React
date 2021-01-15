import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: 'even' 
    };

 
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  inkrement=()=> { 
    this.setState((state)=> {
       const newValue =  state.countValue + 1;
       return {
           countValue:newValue,
           parityType:this.checkParityType(newValue)
       };
      
    });
  }
  decrement() {
    this.setState({
      countValue: this.state.countValue - 1
    });
    this.checkParityType()
  }
  reset() {
    this.setState({
      countValue: 0,
    });
    this.checkParityType()
  }
 checkParityType =()=>{
     
      this.setState({parityType:this.state.countValue % 2 === 0 ? 'even' : 'odd' } )
  }
  
  render() {
    return (
        
      <div>
        <h1>Counter:{this.state.countValue}</h1>
    <h2>Number is:{this.state.parityType}</h2>
        <div>
          <button style={{ marginRight: 10 }} onClick={this.inkrement}>
            Add 1
          </button>
          <button style={{ marginRight: 10 }} onClick={this.decrement}>
            Remove 1
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
