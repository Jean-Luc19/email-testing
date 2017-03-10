import React from 'react';
import Email from './email';


export default function InboxEmailList(props) {
   const folder = props.folder
   const emails = Object.keys(props.emails[folder]).map((emailId, index)=>{
      const email = props.emails[folder][emailId];
      return (
        <li key={index}>
            <Email
                   from={email.from}
                   content={email.content}
                   id={email.id}
                   folder={props.folder}
            />
        </li>
      )
   });
  return (
        <div className="email-list">
          <h2>{folder}</h2>
          <ul>
            {emails}
          </ul>
        </div>
  );

};
