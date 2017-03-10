import React from 'react';
import {Link} from 'react-router';

export default function AppChrome (props) {
    return (
        <div>
            <Link to='/emails'>
              <h1>Your Emails</h1>
            </Link>
            <div>
                {props.children}
            </div>
        </div>
    )
}
