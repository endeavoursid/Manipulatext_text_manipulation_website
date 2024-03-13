
import Navbar from './components/Navbar';
import './App.css';
import Textarea from './components/Textarea';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setalert] = useState(null);
  const showalert =(message, type)=>{
   setalert({
    message: message,
    type: type
   })
  }
  setTimeout(() => {
    setalert(null)
  }, 2500);
  const toggleMode =()=>{
    if(Mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled", "success");
    }
    else{setMode('dark')
    document.body.style.backgroundColor='#273575'
    showalert("Dark mode has been enabled", "success");
  }
}
  return (
    <>
    <BrowserRouter>
 <Navbar title="ManipulaText" about="about us" Mode={Mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
  <div className="container my-3">
  
	<Routes>
		<Route exact path='/about' element={<AboutUs Mode={Mode}/>}/> 
    <Route exact path='/' element={<Textarea showalert={showalert} heading="Write your text below" Mode={Mode}/>}/>
	</Routes>
  </div>  
</BrowserRouter>
 {/* <Textarea showalert={showalert} heading="Write your text below" Mode={Mode}/> */}
 {/*<AboutUs></AboutUs>*/}
 
 </>
  );
}

export default App;
