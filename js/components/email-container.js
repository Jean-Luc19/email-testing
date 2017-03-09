import React from 'react';
import EMAILS from '../emails';
import InboxEmailList from './inbox-email-list';
import SpamEmailList from './spam-email-list';

export default function EmailContainer() {
  return (
    <div>
      <InboxEmailList emails = {EMAILS.inbox}/>
      <SpamEmailList emails = {EMAILS.spam}/>
    </div>
  )
}
