import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
         
          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Red"}} onClick={()=> setColor("Red")}>Red</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Green"}} onClick={()=> setColor("Green")} >Green</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Black"}} onClick={()=> setColor("Black")}>Black</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Yellow"}} onClick={()=> setColor("Yellow")}>Yellow</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Orange"}} onClick={()=> setColor("Orange")}>Orange</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Blue"}} onClick={()=> setColor("Blue")}>Blue</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Purple"}} onClick={()=> setColor("Purple")}>Purple</button>

          <button className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg' 
          style={{background:"Pink"}} onClick={()=> setColor("Pink")}>Pink</button>
          
        </div>
        </div>
    </div>
    </>
  )
}

export default App
