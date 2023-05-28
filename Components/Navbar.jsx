"use client"

import { BsCodeSlash,BsCode } from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Search from './Search';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {

    const links = [
        { to: '/', name: "Home" },
        { to: '/learn', name: "Learn" },
        { to: '/code', name: "Code" },
        { to: '/compete', name: "Compete" },
        { to: '/about', name: "About" },
    ]

    const [open, setOpen] = useState(true);

    const pathname = usePathname();

    const Desk = ()=>{
        return(
            <div className={`hidden flex-row items-center justify-between gap-10 md:flex `}>
            <ul className='flex flex-row gap-10 items-center'>
                {links.map(link=>{
                    if(pathname===link.to){
                        return null;
                    }
                    else{
                        return(
                            <li key={link.name} className=' transition-all delay-100 text-xl font-semibold hover:border-b-4 border-black'>
                                <Link href={link.to}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>
            <div><Button name={"Sign_In"} link={"sign-in"} /></div>
            <div><Search /></div>
            </div>
        )
    }

    const changeState = () =>{
        // e.preventdefault();
        setOpen(false);
    }

    const Mobile = ()=>{
        return(
            <>
            {!open && <BsCodeSlash className='text-3xl font-semibold md:hidden' onClick={()=>setOpen((prev) => {return !prev})} />}
            <div className={` flex-col items-center justify-between gap-10 relative top-52 md:hidden ${open ? "flex" : "hidden"}`}>
                <BsCode className="text-3xl font-semibold" onClick={()=>setOpen((prev) => {return !prev})} />
            <ul className='flex flex-col gap-10 items-center'>
                {links.map(link=>{
                    if(pathname===link.to){
                        return null;
                    }
                    else{
                        return(
                            <li key={link.name} className=' transition-all delay-100 text-xl font-semibold hover:border-b-4 border-black'>
                                <Link href={link.to} onClick={()=>changeState()}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>
            <div><Button name={"Sign_In"} link={"sign-in"} /></div>
            <div><Search /></div>
            </div>
            </>
        )
    }

    return (
        <nav className='flex flex-row items-center justify-around  fixed z-10 w-full bg-opacity-5 h-14'>
            <Link href='/' className='text-3xl md:text-5xl text-theme font-bold'>CoData</Link>
                <Desk />
                <Mobile />
        </nav>
    )
}

export default Navbar