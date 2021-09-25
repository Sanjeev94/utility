import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


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


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#326693';
      showAlert("Dark mode enabled", "success");
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
  }
  }
  return (
    <>
  
     <Navbar title="TextUtlts" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">

     
     <TextForm showAlert={showAlert} heading="Enter the text area to analyse" mode={mode} />
     {/* <About /> */}
     </div>
     {/* <Navbar about="About TextUtils/> */}
    </>
  );
}

export default App;
