import React, { useState } from 'react'

function Bgcolor() {

    const [color, serColor] = useState("Olive");
    
  return (
    <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}
    >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
            <div className='flex flex-wrap gap-3 justify-center bg-white px-3 py-2 rounded-lg'>
                <button
                    onClick={ ()=> serColor("red") } 
                    className='outline-none px-4 py-1 rounded-md text-white' 
                    style={{backgroundColor: "red"}}
                >Red</button>

                <button className='outline-none px-4 py-1 rounded-md text-white' 
                style={{backgroundColor: "green"}}>Green</button>

                <button className='outline-none px-4 py-1 rounded-md text-white' 
                style={{backgroundColor: "Blue"}}>Blue</button>

                <button className='outline-none px-4 py-1 rounded-md text-white' 
                style={{backgroundColor: "orange"}} > Orange </button>
            
            </div>
        </div>
    </div>
  ) 
}

export default Bgcolor