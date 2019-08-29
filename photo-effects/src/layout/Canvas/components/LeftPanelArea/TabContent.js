import React from 'react';
import { useTransition, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

function TabContent(props) {
   return (
      <>
         {/* <Transition
            native
            items={props.tabContent}
            from={{opacity: 0}}
            enter={{opacity: 1}}
            leave={{opacity: 0}}
         >
            {show => show && (transProps => {
               <animated.div style={transProps}> */}
                   <Spring 
                     from = {{ height: 0 }} 
                     to = {{ height: 80 }}
                     enter = {{height: 80}}
                     leave = {{height: 0}}
                     config = {{ duration: 250 }}
                  >
                     {springProps => (
                        <div style ={springProps}>
                           <div style={c1Style}>
                              {props.tabContent}
                           </div>
                        </div>
                     )}
                  </Spring>
               {/* </animated.div>
            })}
         </Transition> */}
      </>
   )
}

const c1Style = {
   background: '#535758',
   color: '#fff',
   padding: '1.5rem',
   height: 'fit-content'
}

export default TabContent;