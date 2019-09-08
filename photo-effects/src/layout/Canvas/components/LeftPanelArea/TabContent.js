import React from 'react';
import { useTransition, useState, animated } from 'react-spring';
import { Spring, Transition } from 'react-spring/renderprops';

function TabContent(props) {
   return (
      <div className="tab-content">
         {props.tabContent}
      </div>
   )
}

export default TabContent;