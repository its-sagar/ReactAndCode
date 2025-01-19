import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 10;

  function addValue(){
    if (counter < 50){
      counter = counter + 1
      setCounter(counter)
    }
    
    
  }

  function subValue(){
    if (counter > 0) {
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Welcome To React</h1>
    <h2>useState Hook Demo (Counter 0 to 50)</h2>
    <h3>counter : {counter}</h3>
    <button onClick={addValue}>Add Number By One</button>
    <button onClick={subValue}>Subtract Number By One</button>
    </>
  )
}

export default App
