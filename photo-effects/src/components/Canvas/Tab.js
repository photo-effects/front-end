import React from 'react';

function Tab(props) {
   let className = tabListItem;

   if (props.activeTab === props.label) {
      className = tabListActive;
   }

   return (
      <li style={className} onClick={() => props.toggleTab(props.label)}>
         {props.label}
      </li>
   );
}

const tabListItem = {
   display: 'inline-block',
   listStyle: 'none',
   marginBottom: '-1px',
   padding: '1rem',
   cursor: 'pointer'
}

const tabListActive = {
   display: 'inline-block',
   listStyle: 'none',
   marginBottom: '-1px',
   cursor: 'pointer',
   padding: '1rem',
   backgroundColor: "white",
   border: "solid",
   borderWidth: "1px 1px 0 1px"
}

export default Tab;