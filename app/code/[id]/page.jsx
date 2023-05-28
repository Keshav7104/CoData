import Button from '@Components/Button'
import React from 'react'

const page = ({params}) => {

  return (
    <section className='flex flex-col pt-20 page_gradient items-center gap-5 justify-center'>
        <h1>Here is code of {params.id}</h1>
        <ul className='flex flex-row gap-2'>
            <li>C</li>
            <li>C#</li>
            <li>C++</li>
        </ul>
        <div className='w-40 h-40 border-2 border-solid border-black'></div>
        <Button name={"Compete"} link={`/compete/${params.id}`} /> 
    </section>
  )
}

export default page