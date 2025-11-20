import React from 'react'
import Button from './Button';

async function page({params}:{params:Promise<{orderId:string}>}) {
    const orderid = (await params).orderId;
  return (
    <div className='text-4xl'>You are Order the item {orderid}
    <Button/>
    </div>
  )
}

export default page