import React from 'react';
import EMAILS from '../emails';
import InboxEmailList from './inbox-email-list';


export default function EmailContainer(props) {
  return (
    <div>
      <InboxEmailList emails = {EMAILS} folder = {props.params.folder}/>
      {props.children}
    </div>
  )
}
