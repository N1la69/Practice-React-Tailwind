import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b] = useState(20);
  return (
    <div className='w-full h-screen bg-zinc-800 p-5 text-white'>
      <Products age="25" data={{age: 25, name: "nilu"}}/>
    </div>
  )
}

export default App