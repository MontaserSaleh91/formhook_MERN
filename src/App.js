import React, { useState } from  'react';
import './App.css';
import FormComponent from './components/FormComponent';
import ResultComponent from './components/ResultComponent.js';


function App() {
  const [state , setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  });
  return (
    <div className="App">
      <FormComponent inputs = {state} setInputs = {setState} />
      <ResultComponent data = {state} />
    </div>
  );
}

export default App;
