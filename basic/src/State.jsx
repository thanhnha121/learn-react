import React from 'react';

class State extends React.Component {
   constructor(props) {
      super(props);
  
      this.state = {
         header: "State",
         content: "Content from state...",
         pContents: [
            "Just", "For", "Test"
         ]
      }
   }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            {this.state.pContents.map((x, i) => <p key={i}>{x}</p>)}
         </div>
      );
   }
}
export default State;