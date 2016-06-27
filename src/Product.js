import React from 'react';

export default (props) => {
  const name = props.name;
  const url = props.url;
  const discount = props.discount;
  const price = props.price;
  const saleprice = price - (price * (discount/100));
  console.log('product js:', props);
  return (
    <div>
      <div>Product {name}  url priced at {price} is on sale with disount {discount} and the sale price is {saleprice} </div>
      <img src={url} height='300' width ='200' />
   </div>
  )};
