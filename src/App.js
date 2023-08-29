import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const myState = useSelector((state) => state.add);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <center>

        <h1>{myState}</h1>
        <button onClick={()=>{ dispatch({type: "Number"}) }}>Click me</button>
        
      </center>
    </div>
  );
}

export default App;
