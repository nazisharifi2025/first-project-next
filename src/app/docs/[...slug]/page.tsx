import React from 'react'

async function page({params}:{params:Promise<{slug:string[]}>}) {
    const AllParamitr = await params;
    if(AllParamitr.slug.length === 2){
        return (
    <div className='h-screen w-full flex justify-center items-center'>
        <h1 className='text-center text-5xl '>
            This is the featcher <span className='font-bold bg-linear-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent'>{(await params).slug[0]}</span>  and  Consept <span className='font-bold bg-linear-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent'>{(await params).slug[1]}</span>  
        </h1>
    </div>
  )
    }
    else if(AllParamitr.slug.length === 1){
       return(
       <div className='h-screen w-full flex justify-center items-center'>
            <h1 className='text-5xl font-bold text-center'>
                This is the fetcher <span className='font-bold bg-linear-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent'>{(await params).slug[0]}</span> 
            </h1>
        </div>
       )
    }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <h1 className='text-center text-3xl '>
            This will manage all the rout inside Docs
        </h1>
    </div>
  )
}

export default page