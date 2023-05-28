"use client"


import { TypeAnimation } from 'react-type-animation'
import Search from '@Components/Search'

const Learn = () => {
  return (
    <section className='page_gradient'>
        <TypeAnimation 
        sequence={[
            'But Wait !!!',
            2000,
            'Why you need to learn...',
            2000,
            'Data Structures',
            2000
        ]}
        wrapper='div'
        cursor={true}
        repeat={0}
        className='flex items-center justify-end w-scrren h-screen font-extrabold text-5xl' />
        
        <section className="h-screen grid grid-cols-3 grid-rows-[10%_30%_30%_30%] p-20 px-60 place-items-center gap-4">
        <div className="col-span-3">
          Because they are Everywhere
        </div>
        <div className="col-span-2 bg-black w-full h-full rounded-xl transition duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
          A.I.
        </div>
        <div className="row-span-2 bg-blue-600 w-full h-full rounded-xl transition duration-300 hover:scale-105 hover:shadow-2xl">
          Crypto
        </div>
        <div className="row-span-2 bg-cyan-300 w-full h-full rounded-xl transition duration-300 hover:scale-105 hover:shadow-2xl">
          Compilers
        </div>
        <div>
          Hello!!! keshav
        </div>
        <div className="col-span-2 bg-orange-500 w-full h-full rounded-xl transition duration-300 hover:scale-105 hover:shadow-2xl">
          Fuck
        </div>
      </section>
      <section className="flex flex-col gap-3 items-center justify-center">
      </section>
      <section className="flex flex-row gap-2">
        or <Search /> to learn Data structure of your choice...
      </section>
    </section>
  )
}

export default Learn