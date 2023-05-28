import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const links = [
        { to: '/', name: "Home" },
        { to: '/learn', name: "Learn" },
        { to: '/code', name: "Code" },
        { to: '/compete', name: "Compete" },
        { to: '/about', name: "About" },
        {to:'https://github.com/Keshav7104/CoData/issues',name:"Issue"}
    ]

  return (
      <footer className='flex flex-col gap-10 items-center py-20 px-5 footer text-[#fffff0] lg:flex-row'>
          <div className='flex flex-col gap-3 items-start justify-center'>
            <h1 className='text-5xl underline'>CoData</h1>
            <p className='text-xl'>
                CoData is a open platform for all programmers,coders,new software engineers to learn as well as practice concepts of Data Structures,we allow them flexbility in which data structure they want to learn as well as in which language....
            </p>
          </div>
        <div className='flex flex-row gap-3'>
            {links.map((link)=>(
                <Link href={link.to} key={link.name} className=' border-r-2'>{link.name}&nbsp;&nbsp;</Link>
            ))}
        </div>
        <div>
            CoData@gmail.com<br />
            +91-7015097566<br/>
        </div>
    </footer>
  )
}

export default Footer