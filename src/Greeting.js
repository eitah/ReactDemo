import React from 'react';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    name = 'fido'
    this.state = {name};
    console.log(this.state);
    this.update = this.update.bind(this);
  }

update() {
  const fname = this.refs.name.value;
  console.log('name:', name)
  this.setState({name: fname, color: 'red'});

}


  render(){
    return (
      <div>
        <input ref='name' type='text' value={'Cat'}/>
        <button onClick={this.update}>Set</button>
        <div>Hello, {this.state.name} </div>
        <div>My color is {this.state.color}</div>
      </div>
    );
  }
}

export default Greeting;
