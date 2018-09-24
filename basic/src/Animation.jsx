import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Animation extends React.Component {
   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName="example"
               transitionAppear={true} transitionAppearTimeout={500}
               >
               <h1>My Element...</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}
export default Animation;