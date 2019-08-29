import React from 'react';
import { useTransition, useState, animated } from 'react-spring';
import { Spring, Transition } from 'react-spring/renderprops';

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
                     to = {{ height: 100 }}
                     config = {{ duration: 250 }}
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
   background: '#535758',
   fontSize: '16px',
   color: '#fff',
   padding: '1.5rem',
   height: 'fit-content'
}

export default TabContent;