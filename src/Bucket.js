import React from 'react';
import ListNums from './ListNums'

class Bucket extends React.Component{
  constructor(props){
    super(props);
    this.state = { evens: [], odds: [] };
    console.log(this.state);
    this.update = this.update.bind(this);
    this.evens = [];
    this.odds = [];
    this.evenSum=0;
    this.oddSum=0;
  }

update() {
  const inputval = this.refs.number.value;
  console.log('inputval:', inputval)
  if (inputval % 2 === 0){
    this.state.evens.push(inputval);
    this.setState({evens: this.evens});
    console.log('evenval:', this.state, this.evens)
  } else {
    this.state.odds.push(inputval);
    this.setState({odds: this.odds});
    console.log('oddval:', this.state, this.oddSum)
  }

  }

  //
  // for ( i = 0; i < this.evens.length; i ++){
  //   let tag = <td> this.evens[i].number </td>
  //   }
  //   for ( i = 0; i < this.odds.length; i ++){
  //     let tag = <td> this.odds[i].number </td>
  //   }

  render(){
    this.evenSum=this.state.evens.reduce((t,n) => t+n,0);
    this.oddSum=this.state.odds.reduce((t,n) => t+n,0);
    console.log('sums', this.state, this.evenSum, this.oddSum);

    return (
      <div>
        <input ref='number' type='number'/>
        <button onClick={this.update}>Add</button>
        <table>
          <thead>
            <tr>
              <th> Evens </th>
              <th> Odds </th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>
                  <ListNums arr={this.state.evens} />
                </td>
                <td>
                  <ListNums arr={this.state.odds} />
                </td>
              </tr>
              <tr>
                <td>{this.evenSum}</td>
                <td>{this.oddSum}</td>
              </tr>
          </tbody>
          </table>
      </div>
    );
  }
}

export default Bucket;
