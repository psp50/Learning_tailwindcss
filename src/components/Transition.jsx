import React from 'react'

function Transition() {
  return (
    <>
    <div className='w-32 h-32 transition hover:bg-blue-500 duration-700 ease-in-out'>
        Hover me
    </div>
    <div className='w-32 h-32 transition-colors duration-500 hover:bg-red-400 hover:scale-110 hover:rotate-6 delay-300'>
        only color change
    </div>
    <div className='w-32 h-32 transition-opacity backdrop-opacity-100 duration:500 hover:opacity-50 bg-pink-500'>
        Side effect
    </div>
    <div className='w-32 h-32 bg-amber-600 animate-bounce'>
        Animation
    </div>
    <div className='w-32 h-32 bg-blue-200 animate-spin'>
        Animation
    </div>
    <div className='w-32 h-32 bg-amber-600 animate-pulse'>
        Animation
    </div>
    <div className='w-32 h-32 bg-blue-400 animate-ping'>
        Animation
    </div>
</>
  )
}

export default Transition
