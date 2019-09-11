import React from 'react';
// import { useTransition, useState, animated } from 'react-spring';
import { Spring, /* Transition */ } from 'react-spring/renderprops';

function TabContent(props) {

   return (
      <>
         {/* <Transition
            items={props.tabContent}
            from={{height: 0}}
            enter={{height: 100}}
            leave={{height: 10}}
         >
            {show => show && (transProps => (
               <div style={transProps}> */}
                   <Spring 
                     from = {{ height: 0 }} 
                     to = {{ height: 160 }}
                     config = {{ duration: 500 }}
                  >
                     {springProps => (
                        <div style={springProps}>
                           <div style={tabContentStyle}>
                              {props.tabContent}
                           </div>
                        </div>
                     )}
                  </Spring>
               {/* </div>
            ))}
         </Transition> */}
      </>
   )
}

const tabContentStyle = {
   background: '#323F4B',
   fontSize: '16px',
   color: '#fff',
   padding: '8px',
   height: 'fit-content'
}

export default TabContent;