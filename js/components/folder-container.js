import React from 'react';
import {Link} from 'react-router';

export default function FolderContainer () {
    return (
        <div>
          <Link to = 'emails/spam/'>Spam</Link>
          <Link to = 'emails/inbox/'>Inbox</Link>
        </div>
    );
}
