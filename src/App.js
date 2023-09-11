import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add the correct imports
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {

  const [mode,setMode]=useState('light');

  const[alert,setAlert]=useState('null');


  const showAlert =(message,type)=>{
    setAlert({msg:message,type:type})

    setTimeout(()=>{
      setAlert('null')
    },1500)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('   Dark Mode enabled!','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('   Light Mode enabled!','success')
    }
  }

  return (
    <>
     <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />

          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/>}></Route> 
          </Routes>
       
      </BrowserRouter>

    </>
  );
}



export default App;


    