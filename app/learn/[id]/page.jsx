import Button from '@Components/Button'
import React from 'react'

const page = ({params}) => {
  return (
    
    <section className='flex flex-col items-center justify-center gap-5 py-20 page_gradient'>
      <h1>
        {params.id}
      </h1>
      <p>
        here would come some theory as well as images animations or models of {params.id}
      </p>
      <Button name={"Code"} link={`/code/${params.id}`} />
      <Button name={"Compete"} link={`/compete/${params.id}`} />
    </section>
  )
}

export default page