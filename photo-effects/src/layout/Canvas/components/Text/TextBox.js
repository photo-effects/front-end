// // What we need for the tool bar

// <div class="sample-toolbar">
// 		<a href="javascript:void(0)" onclick="format('bold')"><span class="fa fa-bold fa-fw"></span></a>
// 		<a href="javascript:void(0)" onclick="format('italic')"><span class="fa fa-italic fa-fw"></span></a>
// 		<a href="javascript:void(0)" onclick="format('insertunorderedlist')"><span class="fa fa-list fa-fw"></span></a>	
// </div>

// // The text box

// <div class="editor" id="sampleeditor">
	
// </div>

// // The js functionality

// // window.addEventListener('load', function(){
// //     document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
// //     document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
// // });

// // function format(command, value) {
// //     document.execCommand(command, false, value);
// // }

// // function setUrl() {
// //     var url = document.getElementById('txtFormatUrl').value;
// //     var sText = document.getSelection();
// //     document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
// //     document.getElementById('txtFormatUrl').value = '';
// // }

import React, { Component } from 'react'

export class TextBox extends Component {
  render() {
    return (
      <div>
        text area placeholder
      </div>
    )
  }
}

export default TextBox
