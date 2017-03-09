import React from 'react';
import Email from './email';
import EMAILS from '../emails';


export default function SpamEmailList(props) {
   const emails = Object.keys(EMAILS.spam).map((emailId, index)=>{
      const email = EMAILS.spam[emailId];
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
      <h2>Spam Inbox</h2>
      <ul>
        {emails}
      </ul>
    </div>
  );

};
