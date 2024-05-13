import React, { useState } from 'react'

const App = () => {
  const [color , setColor ] = useState("olive");
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg rounded-3xl px-3 py-3'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"red"}}
          >Red</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
            onClick={() => setColor("Green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"Green"}}
          >Green</button>
          <button
            onClick={() => setColor("Pink")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"Pink"}}
          >Pink</button>
          <button
            onClick={() => setColor("brown")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"brown"}}
          >Brown</button>
          <button
            onClick={() => setColor("grey")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"grey"}}
          >Grey</button>
          <button
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-white'
            style={{backgroundColor:"orange"}}
          >Orange</button>
        </div>

      </div>
    </div>
  )
}

export default App
