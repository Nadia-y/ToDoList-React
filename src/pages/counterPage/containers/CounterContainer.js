import React, { Component } from 'react';
import Counter from "../components/counter/Counter"; 
import {parity} from '../utils'

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       count:0,
       parityType:'even'
    }
  }
  
  handleAdd = () => {
    this.setState((state)=>{
      const newValue = state.count + 1;
      const parityType=parity(newValue)
      return{
        count:newValue,
        parityType:parity(newValue)
      };
    });
  };

  handleRemove = () => {
    this.setState({count:this.state.count - 1})
  }
  reset = ()=>{
    this.setState({count:0})
  }
  parity =()=>{
    this.setState({parityType:this.state.count % 2 === 0 ? 'even' : 'odd' })
  }

  render() {
    return (
    
        <Counter counterValue={this.state.count} handleAdd={this.handleAdd} handleRemove={this.handleRemove} reset ={this.reset} par= {this.state.parityType} />
   
    );
  }
}
