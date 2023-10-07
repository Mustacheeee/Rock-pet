'use strict'; 
import { useState } from 'react';
import React from 'react';
const e = React.createElement; 
class myButton extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return 'Yes I Really Like This.'; 
    } 
 
    return e( 
      'button', 
      { onClick: () => this.setState({ isliked: true }) }, 
      'Like Button' 
    ); 
  } 
} 
const domContainer = document.querySelector('#some_random_id'); 
ReactDOM.render(e(myButton), domContainer);

// the content for upload image
export default function Upload(){

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
    }
    return(
        <div>
            <h1>Upload</h1>
            <form>
                <input type="file" name="image" onChange=
                {handleFileInputChange}value={fileInputState} className="form-input"/>
                <button className="btn" type="button">Submit</button>
            </form>
        </div>
    )
}