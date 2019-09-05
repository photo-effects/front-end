import React from 'react';
import { useTransition, useState, animated } from 'react-spring';
import { Spring, Transition } from 'react-spring/renderprops';

function TabContent(props) {

   return (
      <div style={tabContentStyle}>
         {props.tabContent}
      </div>
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