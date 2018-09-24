import React from 'react';

class SetStates extends React.Component {
   count = 0;
   constructor() {
      super();
      this.state = {
         data: []
      }
 
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = this.count++ + '';
      if (this.count !== 1) item = ', ' + item; 
      var myArray = this.state.data.slice();
      myArray.push(item);
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
            <h2>Random number and update view</h2>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default SetStates;