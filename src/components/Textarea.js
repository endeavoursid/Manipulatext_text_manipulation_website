import React, {useState} from 'react'


export default function Textarea(props) {
  const countwords =(text)=>{
    let newText = text;
    newText = text.split(/[ ]+/)
    newText=newText.join(" ")

      return newText.split(" ").length;
  }
  const countchar =(text)=>{
    let newText =text;
    newText = text.split(/[ ]+/)
   return newText.join("").length
  }
    const [text, setText] = useState("")
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
      //console.log("uppercase was clicked")
      let newText = text.toLowerCase()
      setText(newText)
      props.showalert("Converted to lowercase", "success")
  }
    const handleonChange = (event)=>{
       // console.log("onchange");
        setText(event.target.value)
    }
    const handleforClick = ()=>{
      //console.log("uppercase was clicked")
      let newText = text;
       newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showalert("Extra spaces have been removed", "success")
  }
  const handleCopy =()=>{
    let text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert("Text copied", "success")

  }
  const handleClear = ()=>{
    //console.log("uppercase was clicked")
    let newText = ""
    setText(newText)
    props.showalert("Text cleared", "success")}
  return (
    <>
    <div className='container' style={{color: props.Mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.Mode==='dark'?'#273575':'white', color: props.Mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleforClick}>remove extra spaces</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.Mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{countwords(text)-1} words and {countchar(text)} characters</p>
      <p>time to read - {0.008*(countwords(text)-1)}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter in the textbox above to preview"}</p>
    </div>
    </>
  )
}
