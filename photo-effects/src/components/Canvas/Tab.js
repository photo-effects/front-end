import React from 'react';

function Tab(props) {
   let className = tabListItem;

   if (props.activeTab === props.label) {
      className = tabListActive;
   }

   return (
      <div style={className} onClick={() => props.toggleTab(props.label)}>
         {props.label}
      </div>
   );
}

const tabListItem = {
   display: 'inline-block',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#ececec",
}

const tabListActive = {
   display: 'inline-block',
   padding: '10px',
   cursor: 'pointer',
   width: '100%',
   backgroundColor: "#a7a7a7",
}

export default Tab;