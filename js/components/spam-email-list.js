import React from 'react';
import Email from './email';


export default function SpamEmailList(props) {
   const emails = Object.keys(props.emails).map((emailId, index)=>{
      const email = props.emails[emailId];

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
