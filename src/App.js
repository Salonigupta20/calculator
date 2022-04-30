import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub, mult, div} from './Calc';


function App(){
return(
  <>
  <ul>
<li> sum of 2 numbers is {add(40,3)}</li>
<li>Sub of 2 numbers is {sub(30,3)}</li>
<li>Div of 2 numbers is {div(10,3)}</li>
<li>Mult of 2 numbers is {mult(10,3)}</li>
</ul>
  </>
)
};
export default App;