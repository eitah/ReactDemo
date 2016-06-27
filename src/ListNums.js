import React from 'react';

export default (props) => {

  console.log('listNums js:', props.arr);

  let result = []
  result = props.arr.map((e,i) => <li key = {i}> {e}</li>);

  return (
    <div>
      {result}
    </div>
  )};

// export default ListNums;
