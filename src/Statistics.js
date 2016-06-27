import React from 'react';

export default (props) => {
  const sum = props.nums.reduce(function(agg,n) {return agg + n;}, 0);
  console.log('sum:', props.nums);
  return (
    <div>
      <div>Sum of
      {props.nums.toArray()}
      are {sum} </div>
   </div>
  )};
