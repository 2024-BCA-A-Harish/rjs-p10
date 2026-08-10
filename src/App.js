import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]= useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Page is {count} Times Clicked </h2>
        <button type="button" class="btn btn-primary" onClick={()=>setCount(count + 1)}> Increment </button>
         <button type="button" class="btn btn-danger" onClick={()=>setCount(count - 1)}> Decrement </button>
      </header>
    </div>
  );
}

export default App;
