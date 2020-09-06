import React from 'react';
import './Comment.css'
const Comments = (props) => {
  const { name, title, body } = props.data;

  const num = Math.round((Math.random() * 100));
  console.log("number",num)

  return (
    <div className="user">
      <img src={`https://randomuser.me/api/portraits/med/men/${num}.jpg`} alt="User" />
      <h4>{name}</h4>
      <div className="align">
        <div className="div-1">
          <p>{body} </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;