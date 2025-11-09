import { notFound } from 'next/navigation';
import React from 'react'

async function page({params}:{params:Promise<{postid:string}>}) {
  const PostParamitr = (await params).postid;
  if(+PostParamitr > 1000){
    return  notFound();
    }
    return (
    <div className='h-screen w-full flex justify-center items-center'>
        <h1 className='text-4xl '>This is the post <span className='font-bold text-4xl bg-linear-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent  '>{PostParamitr}</span> </h1>
    </div>
  )
}

export default page