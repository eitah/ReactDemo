import React from 'react';

class Like extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: props.start};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.like = 'https://s-media-cache-ak0.pinimg.com/736x/4e/5c/f7/4e5cf7d4ccb9c59b6620a9c71944d51e.jpg';
    this.dislike = 'http://www.i2symbol.com/css/chat/facebook/smileys/hires/grumpy_thumbs_down.png';
    this.pic = '';
  }

increment(){
  console.log('Increment function', this);
  this.setState({count: this.state.count + 1});
  this.setState({pic: this.setPic()});
  console.log("this state", this.state);

}
decrement(){
  console.log('Decrement function', this);
  this.setState({count: this.state.count - 1});
  this.setState({pic: this.setPic()});
}
setPic(){
  console.log('set pic function', this);
  if (this.state.count >= 0) {
    this.pic= this.like;
  } else {
    this.pic= this.dislike;
  }
};

render(){
  return (
    <div>
      <div>Count: {this.state.count} </div>
      <button onClick={this.increment}>++</button>
      <button onClick={this.decrement}>--</button>
      <img src={this.pic}></img>
    </div>
  );
}
}

export default Like;
