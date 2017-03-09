import React from 'react';
import Email from './email';


export default function InboxEmailList(props) {
   const folder = props.folder
   const emails = Object.keys(props.emails[folder]).map((emailId, index)=>{
      const email = props.emails[folder][emailId];



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
          <h2>{folder} Inbox</h2>
          <ul>
            {emails}
          </ul>
        </div>
  );

};
