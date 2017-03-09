import React from 'react';

export default function AppChrome (props) {
    return (
        <div>
            <h1>
                Your Emails
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}
