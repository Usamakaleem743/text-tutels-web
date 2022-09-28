import React, { useState } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Textform from './Components/TextForm.js';
// import Alert from './Components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';




function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState("null");

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#1F1E1F';
      showAlert("Dark mode has been Enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
    }
  }
 
  
    return (
    <>
  
      
     <Navbar title="Textuttils" mode={mode} togglemode={toggleMode}/>
     <Alert alert={alert}/>
  
      <div className="container my-4">
            
          <Textform showAlert={showAlert} heading="Try Textuttils - Remove extra spaces , Copy text , 
          Uppercase to Lowercase , Lowercase to Upercase"  mode={mode} />
        </div> 
      
     
  
     
     </>
  );  
 }
export default App;

