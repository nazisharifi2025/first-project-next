import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-ull gap-7 flex-col flex justify-center items-center'>
        <div className='w-[60%] h-12 bg-stone-200 flex justify-center items-center'>
            <h1 className='text-3xl font-bold'>Product Page</h1>
        </div>
        <div className='w-[60%] h-[40vh] p-6 bg-stone-200 flex justify-center items-center gap-6 '>
            <div className='w-[200px] h-full flex flex-col bg-white justify-center items-center'>
                <h1 className='p-3 rounded-md bg-stone-200 text-4xl'>🍏</h1>
                <h2 className='text-2xl'>Apple</h2>
                <h2 className='text-2xl'>140 AF</h2>
                {/* <Link to="Product/Productid"></Link> */}
                <a href="Product/1" className='px-3 py-1  rounded-md text-stone-300 font-bold'>Learn More..</a>
            </div>
            <div className='w-[200px] h-full flex flex-col bg-white justify-center items-center'>
                <h1 className='p-3 rounded-md bg-stone-200 text-4xl'>🍌</h1>
                <h2 className='text-2xl'>Banana</h2>
                <h2 className='text-2xl'>160 AF</h2>
                {/* <Link to="Product/Productid"></Link> */}
                <a href="Product/2" className='px-3 py-1  rounded-md text-stone-300 font-bold'>Learn More..</a>
            </div>
            <div className='w-[200px] h-full flex flex-col bg-white justify-center items-center'>
                <h1 className='p-3 rounded-md bg-stone-200 text-4xl'>🍊</h1>
                <h2 className='text-2xl'>Oringe</h2>
                <h2 className='text-2xl'>190 AF</h2>
                {/* <Link to="Product/Productid"></Link> */}
                <a href="Product/3" className='px-3 py-1  rounded-md text-stone-300 font-bold'>Learn More..</a>
            </div>
        </div>
    </div>
  )
}

export default page