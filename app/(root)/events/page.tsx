import DemoEvents from '@/components/DemoEvents'
import React from 'react'

const page = () => {
  return (
    <main className="relative 
    bg-blue-800 bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>

      <DemoEvents/>
    </main>
  )
}

export default page
