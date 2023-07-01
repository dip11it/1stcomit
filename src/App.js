import { useState } from 'react';
import './App.css';

function App() {
  let [value,setvalue]=useState("Hello World")
  function eventchange(){
    setvalue("Dipankar")
  }
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={eventchange}>Click</button>
    </div>
  );
}

export default App;
