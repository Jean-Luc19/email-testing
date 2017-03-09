import React from 'react';

export default function Email(props){
  return (
    <div>
        <h3>From: {props.from}</h3>
        <p>To: {props.to}</p>
        <p>Title: {props.title}</p>
        <p>Content: {props.content}</p>
    </div>
  )
}
