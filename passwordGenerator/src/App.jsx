import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [passwold, setPasswold] = useState(null)
  const [charecterAllowed, setCharecterAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)

  const passwoldGenrator = useCallback(() => {
    let pass = ""
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz"
    if (numberAllowed) s += "1234567890"

    if (charecterAllowed) s += "!@#$%^&*(){}[]:;<>,./|"

    for(let index = 1; index <= length; index++) {
      let i = Math.floor(Math.random() * s.length + 1)
      pass += s.charAt(i)
    }
    setPasswold(pass)
}, [length, charecterAllowed, numberAllowed, setPasswold])

useEffect(() => {
  passwoldGenrator()
}, [length, charecterAllowed, numberAllowed, passwoldGenrator])

const passwoldRef = useRef(null)

const copyPasswordToClipboard = useCallback(() => {
  passwoldRef.current?.select()
  // passwoldRef.current?.setSelectionRange(0, 100)
  window.navigator.clipboard.writeText(passwold)
}, [passwold])

return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center text-3xl py-3 mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={passwold}
        className='outline-none px-3 py-1 w-full'
        placeholder='Password'
        ref={passwoldRef}
        readOnly />
        <button className='outline-none bg-blue-700 active:bg-blue-900 px-3 py-0.5 text-white' 
        onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
          onChange={(e) => setLength(e.target.value)}/>
          <label>Length: {length}</label>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" id='numberInput' defaultChecked={numberAllowed} onClick={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor='numberInput'>Number</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" id='charecterInput' defaultChecked={charecterAllowed} onClick={() => setCharecterAllowed((prev) => !prev)} />
            <label htmlFor='charecterInput'>Special Charecter</label>
          </div>

        </div>

      </div>
      
    </div>

  </>
)
}

export default App
