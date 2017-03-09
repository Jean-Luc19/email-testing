import React from '.react';
import Email from './email';


export default function EmailList(props) {
   const emails = Object.keys(props.emails.inbox).map((emailId, index)=>{
      const email = props.emails.inbox[emailId];

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
    <ul>
      {emails}
    </ul>
  );

};
