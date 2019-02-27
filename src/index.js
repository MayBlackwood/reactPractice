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

{/* <div id="root"></div>;
const element = <h1>Captain Jack Sparrow</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
); */}


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       <h3>It's me, Jack!</h3>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// ReactDOM.render(<App />, document.getElementById("root"));
// console.log("hello");

// -------------------------------------------------------------------------------------

// function Welcome(props) {

//   return <h1>Hello, {props.type} {props.name} {props.lastName} !</h1>;
// }

// function Greetings() {
//   return (
//     <div>
//       <Welcome name="Jack" lastName ='Sparrow' type='captain'/>
//       <Welcome name="Sarah" lastName="Jessica" type="Parker" />
//       <Welcome name="John" lastName="Travolta" type="artist" />
//     </div>
//   );
// }


// ReactDOM.render(
//   <Greetings />,
//   document.getElementById('root')
// );

// --------------------------------------------------------------------------------------

// function formatDate(date) {
//   return date.toLocaleDateString();
// }



// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//         src={props.user.avatarUrl}
//         alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('root')
// );

// ------------------------------------------------------------------------------------------

function Comment(props) {
  return (
    <div className="Comment">

      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarURL}
          alt={props.author.name}
          />
        <h1 className="UserInfo-name">
          {props.author.name}
        </h1>
      </div>

      <div className="Comment-UserEmail">
        <h2>
          {props.email}
        </h2>
      </div>

      <div className="Comment-UserNickname">
        {props.nickname}
      </div>
    </div>
  );
}

function Avatar(props) {
  
}


const comment = {
    author: {
      avatarURL : 'http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg',
      name: 'The Road'
    },    
    email:"kseniya.bobtsova@gmail.com",
    nickname: "MayBlackwood"
}

ReactDOM.render(
  <Comment  
    author = {comment.author}
    email = {comment.email}
    nickname={comment.nickname} />,
  document.getElementById('root')  
);