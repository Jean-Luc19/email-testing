import React from 'react';
import Email from './email';


export default class InboxEmailList extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       value: ''
     }
      this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      value: e.target.value
    });

  }

   render() {

      const folder = this.props.folder
      const emails = Object.keys(this.props.emails[folder]).map((emailId, index)=>{
         const email = this.props.emails[folder][emailId];
         return (
           <li key={index}>
               <Email
                      from={email.from}
                      content={email.content}
                      id={email.id}
                      folder={this.props.folder}
               />
           </li>
         )
      }); console.log(emails);

      //console.log(fromField);
      const filteredEmails = emails.filter(item => {
        const fromField = item.props.children.props.from;
        return fromField.includes(this.state.value)
      })
     return (
           <div className="email-list">
             <h2>{folder}</h2>
             <input type="text" value={this.state.value}
             onChange={this.onChangeHandler}/>

             <ul>
               {filteredEmails}
             </ul>
           </div>
     );
   }


};
