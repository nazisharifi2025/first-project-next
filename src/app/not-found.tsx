import React from 'react'

function notfound() {
  return (
    <div className='h-screen w-full flex  justify-center items-center bg-black flex-col'>
        <div className='py-4 px-5  font-serif text-9xl font-bold  text-gray-800 '>4o4</div>
        <h1 className='font-bold text-4xl h-16 flex items-center p-3 bg-linear-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent  '> This page is Not Found</h1>
    </div>
  )
}

export default notfound