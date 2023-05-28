import React from 'react'

const page = ({params}) => {
  return (
    <section className='flex flex-col items-center gap-3 page_gradient py-20'>
        Here are the questions on {params.id} for today...
        <ul>
          <li>Question</li>
          <li>Question</li>
          <li>Question</li>
          <li>Question</li>
          <li>Question</li>
        </ul>
    </section>
  )
}

export default page