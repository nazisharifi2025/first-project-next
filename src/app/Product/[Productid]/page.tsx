import React from 'react'

async function page({params}:{params: Promise<{Productid:string}>}) {
  const ProductId = (await params).Productid
  return (
    <div className='h-screen w-full flex justify-center items-center font-bold text-5xl'>
      <h1 className='font-serif border-b pb-3'>product details page about Product <span className='text-blue-500'>{ProductId}</span></h1>
    </div>
  )
}

export default page