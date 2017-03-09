import React from 'react';

export default function Email(props){
  return (
    <div>
        <h3>From: {props.from} || Content: {props.content}</h3>
    </div>
  )
}
