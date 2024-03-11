import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { useState } from 'react';


function App() {
  const [arr,setarr]=useState(["Quantum computing stands at the forefront of technological advancement, promising to revolutionize computation by harnessing the principles of quantum mechanics.",
  "At the heart of quantum computing are qubits, which leverage the principles of superposition and entanglement.",
  "Despite being in its nascent stages, quantum computing has witnessed remarkable progress in recent years. ",
  "However, quantum computing still faces significant challenges and limitations.",
  "In conclusion, quantum computing represents a paradigm shift in computation, offering unprecedented computational power and unlocking new frontiers in science and technology. "])
  return (
    <Home myArray={arr}
      setarr={setarr}
     />
    
  );
}

export default App;
