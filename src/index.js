//import App from './App';
import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter'
import Like from './Like'
import Greeting from './Greeting';
import Bucket from './Bucket';
import Weather from './Weather';



render(
  <div>
    <Weather />
  </div>, document.getElementById('root'));
  // <h3>Counter</h3>
  // <Counter start={Math.floor(Math.random() * 10)} />
  // <Like start={0} />
  //import Temperature from './Temperature';
  // import Product from './Product';
  // import Statistics from './Statistics';

  //render(<App x={3} y={2} />, document.getElementById('root'));
  //
  // let tags =[];
  // for (let i = 0; i <10; i++){
  //   let rnd1 = Math.floor(Math.random() * 100);
  //   let rnd2 = Math.floor(Math.random() * 100);
  //
  //   let tag = <Sum key={i} x={rnd1} y={rnd2} />;
  //   tags.push(tag);
  // }


  // let tags = [];
  // let ptags = [];
  // let product=[{name: "ipad", price: "1000", discount: "10", url: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ipad/ipad/identify-ipad.jpg"},{name: "iphone", price: "400", discount: "20", url: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ipad/ipad/identify-ipad.jpg"}]
  //
  //
  // for (let i = 0; i <2; i++){
  //   let city = 'Chicago'
  //   let tempf = Math.floor(Math.random() * 100);
  //
  //   let producttag=<Product name={product[i].name} price={product[i].price} url={product[i].url} discount={product[i].discount} />;
  //   let tag = <Temperature city={city} tempf={tempf} />;
  //   tags.push(tag);
  //   tags.push(producttag);
  //   console.log('tags', tags);
  // }
  //
  // let nums = [1,1,2,3,4,5,6,1,8,9];
  // let tag=<Statistics nums={nums} />


  //{tag}
  //{tags}
  //<Temperature city='chicago' tempf='95' />;
  //<Product image='some_url' name='ipad' price={1000} discount={10} />


// render(
//   <div>
//     {tags}
//   </div>, document.getElementById('root'));

///temperature compnent chicago 95 dev4 31 degree C
//product ipad $1000 normal, discount 10%, sale price $900.00
