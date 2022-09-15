
import './App.css';
import img1 from './img1.jpg';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router ,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
      setAlert({
      msg:message,
      type:type
  
        })
      setTimeout(() => {
      setAlert(null);
      
      }, 1500);
  };    


  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
    document.body.style.backgroundColor='#131e2e'
    showAlert("Dark mode Enabled","Success")
    }
    
    else
    {setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode Enabled","Success")
    }
  }

  return (
    <>
    <div style={{backgroundImage:img1}} >
      
      
  <Router>
    <Navbar title="TextUtility" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    <Route exact path="/"
          element={<TextForm showAlert={showAlert} Heading="Enter Text to convert" mode={mode}/>} />
          <Route exact path="/about" element={<About/>}/>
          
          
    </Routes>
      
    </div>
    </Router>
    <Footer mode={mode}/> 
    </div>
    </>
  );
}

export default App;
