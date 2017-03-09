import React from 'react';
import Email from './email';
import EMAILS from '../emails';

export default function InboxEmailList(props) {
   const emails = Object.keys(EMAILS.inbox).map((emailId, index)=>{
      const email = EMAILS.inbox[emailId];

      return (
        <li key={index}>
            <Email to={email.to}
                   from={email.from}
                   title={email.title}
                   content={email.content}
            />
        </li>
      )
   });
  return (
        <div>
          <h2>Main Inbox</h2>
          <ul>
            {emails}
          </ul>
        </div>
  );

};
