import React from 'react';
import EMAILS from '../emails';
export default function MessageContainer(props) {
    console.log(props.params.messageid)
    const folder = props.params.folder;
    const id = props.params.messageid;
    const message = EMAILS[folder][id];
    console.log(message);
  return (
    <div>
        <p>{message.to}</p>
        <p>{message.from}</p>
        <p>{message.title}</p>
        <p>{message.content}</p>
    </div>
  )
}
