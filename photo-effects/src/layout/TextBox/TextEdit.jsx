import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'



export class TextEdit extends Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: "<b>Hello <i>World</i></b>"};
  };
 
  handleChange = evt => {
    this.setState({html: evt.target.value});
  };
 

  render = () => {
    return <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            />
  };
}

export default TextEdit







// import React, { useState } from 'react';
// import TextBox from './TextBox';
// import TextToolbar from'./TextToolbar'

// const TextEdit = () => {

//     const [input, setInput] = useState('');


//     const handleInputChanges = e => {
//       setInput(e.target.value);
//     }

//     console.log(input)
  
//   return (  
//     <div style={{border:'1px solid black'}} >
//      <form>
//       <input className={ bold ? '.red': ''}
//       style={{fontSize:'4rem', padding:'10px'}}
//       type='text'
//       placeholder='ENTER TEXT'
//       value= {input}
//       onChange={handleInputChanges}
//       /> 
//      </form>
//      <TextToolbar />
//      <TextBox input={input} />
//     </div>
//   )
// }

// export default TextEdit
