import React from '.react';

export default function Email(props){
  return (
    <div>
        <h1>{props.from}</h1>
        {props.to}
        {props.title}
        {props.content}
    </div>
  )
}
