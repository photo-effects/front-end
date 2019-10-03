import React from 'react';

function TabContent(props) {
   return (
      <div style = { tab_content }>
         { props.tabContent }
      </div>
   )
}

const tab_content = {
   background: '#f4f4f4',
   width: '100%',
   height: '100%',
}

export default TabContent;