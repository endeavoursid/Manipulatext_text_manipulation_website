import React from 'react'

export default function AboutUs(props) {
  let mystyle = {
    color: props.Mode === 'dark'?'white':'#273575',
    backgroundColor: props.Mode === 'dark'?'#273575':'white'
  }
  
    
  return (
    <div className="container" style={mystyle}>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <h1 className="my-3" style={mystyle}>About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle} >
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={mystyle}>
        <strong>Manipulatext gives you a way of analyzing your text quickly and efficiently</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle} >
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={mystyle}>
       Manipulatext is a free to use text manipulating website. The creator created this website purely to learn the concepts of react.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body" style={mystyle}>
        This website works in any web browser such as chrome, firefox, opera, microsoft edge and many more.
      </div>
    </div>
  </div>
</div>
    </div>
  )
  }
