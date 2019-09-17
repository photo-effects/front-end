import React from 'react';


function Cardview(props, {match}) {
  const cardId = props.find(({id})=> id === match.params.id)

  // const photo = props.pic.find(cardpic => `${cardpic.id}` === id);
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: 'black',
        opacity: '.4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2 style={{ color: 'hotpink', fontWeight: 'bold', fontSize: '4rem' }}>
        {props.title}
      </h2>
    </div>
  );
}

export default Cardview;
