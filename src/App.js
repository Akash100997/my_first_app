import './App.css';
import { useState , useEffect} from 'react';

const App = () => {
  const [Counter, setCounter] = useState(0);
  useEffect(()=>{
    alert("You've changed the counter to "+ Counter)
  }, [Counter]);
  return (
    <div className="App">
      <button onClick={()=> setCounter((prevCount) => prevCount-1)}>-</button>
      <h2>{Counter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
