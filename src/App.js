// import logo from './logo.svg';
import About from './About';
import Alert from './Alert';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Textform';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }




  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
              <Route path="/" element={ <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> } />
          
            <Route path="/about" element={  <About />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>




    </>
  );
}

export default App;
