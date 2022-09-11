import './App.css';
import { useState } from 'react';

const App = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={()=> setCounter((prevCount) => prevCount-1)}>-</button>
      <h2>{Counter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
