import React, {useState} from 'react'

export default function TextForm(props) {
    
      const CopyText=()=>{
         /* Get the text field */
  var copyText = document.getElementById("textArea");

  /* Select the text field */
  copyText.select();
  

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  props.showAlert("Copied to clipboard ","Success")
      }  
      
      const HandleUP= ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case ","Success")
      }
      const HandleLw= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case ","Success")
      }
      const HandleClear= ()=>{
      let newText='';
        setText(newText)
        props.showAlert("Text cleared ","Success")
          }
  const handleOnchange =(event)=>{
    setText(event.target.value)
    
  }
  const [text, setText]=useState('Enter text Here')
  return (

    <>
      <div className="container " style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.Heading}</h1>
        <div className='mb-3' >
      
          <textarea type="text" value={text} style={{backgroundColor:props.mode==='light'?'white':'#495057',color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange} className="form-control" id="textArea" rows="5"></textarea>
        </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={HandleUP}>Convert to UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-secondary mx-3" onClick={HandleLw}>Convert to LowerCase</button>  
      <button disabled={text.length===0}  className="btn btn-danger mx-3" onClick={HandleClear}>Clear text</button>  
      <button disabled={text.length===0}   className="btn btn-warning" onClick={CopyText}>Copy text</button>    
      
    </div>
    <div className="container my-4 " style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p ><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> Characters</p>
      <p><b>{.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> min to read</p>
      <h3>Preview</h3>
      <p >{text.length>0?text:'Enter text above for Preview'}</p>
      
    </div>
  </>
  
  )
}
