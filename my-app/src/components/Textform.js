import React ,{ useState} from 'react'


export default function Textform (props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to Uppercase.","success")
    }
    const handleLCclick=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to Lowercase.","success")
    }
    
    const handleCTclick=()=>{
        let newtext='';
        settext(newtext);
        props.showAlert("Text cleared.","success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard.","success")
    }
    const handleextrasppaces=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Remove Extra spaces.","success")
    }
   
    const  handleonchange=(event)=>{
        settext(event.target.value);
    }

    const [text, settext] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode ===`dark`?`white`:`black`}}>
        <h3>{props.heading}</h3>
     <div className="mb-3">
         <textarea className="form-control" style={{backgroundColor: props.mode ===`dark`?`#1F1E1F`:`white`,
         color: props.mode ===`dark`?`white`:`black`} }
          onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
         <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleupclick}>Convevrt to Uppercase</button>
         <button disabled={text.length===0} className="btn btn-danger my-2 mx-2" onClick={handleLCclick}>Convevrt to Lowercase</button>
         <button disabled={text.length===0} className="btn btn-info my-2 mx-2" onClick={handleextrasppaces}>Remove Extra spaces</button>
         <button disabled={text.length===0} className="btn btn-success my-2 mx-2" onClick={handleCopy}>Copy text</button>
         <button disabled={text.length===0} className="btn btn-secondary my-2 mx-2" onClick={handleCTclick}>Clear text</button>
         
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode ===`dark`?`white`:`black`}}>
            
     <h2>Text Summary</h2>
     <p>{text.split(/\s+/).filter((a)=>{return a.length!==0}).length} <b>words</b> and {text.length} <b>characters</b> 
      and {text.split(".").filter((a)=>{return a.length!==0}).length} <b>Sentenses.</b>  </p>
     <p>{0.008 * text.split(" ").filter((a)=>{return a.length!==0}).length} Minutes for read</p>
          
     <h2>Preview</h2>
     <p>{text.split(".").filter((a)=>{return a.length!==0}).length ?text:
     "Enter something in the textbox above to preview it here."}</p>
            
    </div>
    
         
    </>
    
  )
}



