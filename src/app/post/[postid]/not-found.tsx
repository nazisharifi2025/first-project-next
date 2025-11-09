"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
function notfound() {
    const path = usePathname();
    const postid = path.split("/")[2];
  return (
    <div className='h-screen w-full flex  justify-center items-center bg-black/80 flex-col'>
        <div className='py-4 px-5  font-serif text-9xl font-bold  text-gray-800 '>4o4</div>
        <h1 className='font-bold text-4xl h-16 flex items-center p-3 bg-linear-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent  '> The Post with id {postid} could not be found</h1>
    </div>
  )
}

export default notfound