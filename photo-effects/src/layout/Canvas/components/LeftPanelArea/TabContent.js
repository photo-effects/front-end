import React from 'react';

function TabContent(props) {
   return (
      <div style = { tab_content }>
         {props.tabContent}
      </div>
   )
}

const tab_content = {
   background: '#f4f4f4',
   padding: '10px 20px',
   width: '100%',
}

export default TabContent;