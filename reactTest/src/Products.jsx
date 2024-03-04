import React, { useState } from 'react'

function Products({age, data}) {
  const [a,b] = useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-500'>
        <h3 className={`${a === false? 'text-red-600': 'text-blue-600'}`}>{a === false? "hello":"hey"}</h3>
        <button onClick={()=>{b(!a)}}>Change</button>
    </div>
  )
}

export default Products