import React from 'react';
import ReactDOM from 'react-dom';

class FindDomNode extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'rgba(' + ((Math.random() * 255) + 1) 
         + ',' + ((Math.random() * 255) + 1) 
         + ',' + ((Math.random() * 255) + 1) 
         + '1)';
   }
   render() {
      return (
         <div>
            <h2>Find myDiv and random color</h2>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <br />
            <br />
            <div id="myDiv">NODE</div>
         </div>
      );
   }
}
export default FindDomNode;