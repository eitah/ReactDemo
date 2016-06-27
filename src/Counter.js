import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: props.start};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

increment(){
  console.log('Increment function', this);
  this.setState({count: this.state.count + 1});
}
decrement(){
  console.log('Decrement function', this);
  this.setState({count: this.state.count - 1});
}
  render(){
    return (
      <div>
        <div>Count: {this.state.count} </div>
        <button onClick={this.increment}>++</button>
        <button onClick={this.decrement}>--</button>
      </div>
    );
  }
}

export default Counter;
