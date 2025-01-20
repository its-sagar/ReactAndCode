import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addValue(){

    // Tis will not work
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
  }

  function subValue(){
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
  }

  return (
    <>
    <h1>Welcome To React</h1>
    <h3>Counter: {counter}</h3>
    <button onClick={addValue}>Add Value by One</button>
    <button onClick={subValue}>Sub Value by One</button>
    </>
  )
}

export default App
