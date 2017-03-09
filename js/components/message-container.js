import React from 'react';
import EMAILS from '../emails';


export default function MessageContainer(props) {
  const message = EMAILS[props.params.messageid];
  console.log(props)
  return (
    <div>
    hello
    </div>
  )
}
