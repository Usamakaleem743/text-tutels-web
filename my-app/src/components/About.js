import React, { useState } from 'react'

export default function About() {

    const [myStyle , setMystyle] =useState({
        color:'black',
        backgroundColor:'white', 
        
    })
    const[btntext,setbtntext]=useState("Enable Dark Mode")
    const togglestyle =()=>{
        if (myStyle.color==='black') {
            setMystyle({
                color:'white',
                backgroundColor:"black",
                border:'1px solid white'  
                

            })
            setbtntext("Enable Light Mode")
        }
        else{
            setMystyle({
                color:"black",
                backgroundColor:"white"
                
            })
            setbtntext("Enable Dark Mode")
        }  
    }

  return (
    <div className='container'>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item " style={myStyle}>
    <h3 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h3>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item " style={myStyle}>
    <h3 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h3>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h3 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h3>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
        </div>
        <button onClick={togglestyle} type='button' className='btn btn-dark my-3'>{btntext}</button>
    </div>
  )
}
