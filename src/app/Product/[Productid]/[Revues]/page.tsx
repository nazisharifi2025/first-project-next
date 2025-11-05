async function page({params}:{params:Promise<{Productid:string,Revues:string}>}) {
    const {Productid , Revues} = await params

  return (
    <div className='h-screen w-full flex justify-center items-center font-bold text-5xl'>
      <h1 className='font-serif border-b pb-3 w-[60%] text-center'>product details page about Product <span className='text-blue-500'>{Productid}</span> and the Reviews id is  <span className='text-blue-500'>{Revues}</span></h1>
    </div>
  )
}

export default page