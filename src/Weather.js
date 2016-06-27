import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = { city: 'chicago'};
    this.update = this.update.bind(this);
  }

componentWillMount(){
  console.log('Will');
}

componentDidMount(){
  console.log('Did', this);
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city +'&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
  .then((rsp) => {
    console.log('rsp', rsp);
    this.setState({temp: rsp.main.temp});
  })
}

update(){
  this.state.city = this.refs.city.value;
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city +'&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
  .then((rsp) => {
    console.log('rsp', rsp);
    this.setState({temp: rsp.main.temp});
  })
}

  //
  // for ( i = 0; i < this.evens.length; i ++){
  //   let tag = <td> this.evens[i].number </td>
  //   }
  //   for ( i = 0; i < this.odds.length; i ++){
  //     let tag = <td> this.odds[i].number </td>
  //   }

  render(){
    console.log('render');
    return (
      <div>
        <h1>Weather</h1>
        <input ref='city' type='text' />
        <button onClick={this.update}>Add</button>
        <div> temp is {this.state.temp} </div>
      </div>
    );
  }
}

export default Weather;
