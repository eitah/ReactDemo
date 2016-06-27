import React from 'react';

export default (props) => {
  const city = props.city;
  const tempf = props.tempf;
  const tempc = Math.floor(tempf -32 * (5/9));
  console.log('temp js:', tempc);
  return (
    <div>
      <div>Temperature for {city} is {tempf} in Farenheight.</div>
        <div> but is {tempc} in Celsus.</div>
    </div>
  )};
