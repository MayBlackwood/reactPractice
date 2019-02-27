import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`; 
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// };


// const user = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// const element = (
//   <div>
//     <h1>
//     Hi, {formatName(user)}!
//   </h1>
//   <div> 
//     {getGreeting()}
//   </div>
//   </div>
// );

<div id="root"></div>;
const element = <h1>Jack Sparrow</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById("root"));
// console.log("hello");