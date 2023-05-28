import React from 'react'
import Link from 'next/link';

const Button = ({name,link}) => {

  return (
    <Link className='rounded-3xl h-8 w-24 border-2 border-solid border-black text-center pt-[3px]' type='button' href={link}>
      {name}
    </Link>
  )
}

export default Button