import React from 'react'

function layout({children}: {children:React.ReactNode}) {
  return (
    <div className=' bg-stone-300 flex flex-col justify-center items-center'>
        {children}
    </div>
  )
}

export default layout