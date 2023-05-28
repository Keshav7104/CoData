import React from 'react'
import styles from "@styles/Animation.module.css"

const Lang = () => {

    const langs = [
        {img:'icons/typescript.svg',name:"Typescript"},
        {img:'icons/sharp.svg',name:"C#"},
        {img:'icons/c++.svg',name:"C++"},
        {img:'icons/python.svg',name:"Python"},
        {img:'icons/java.svg',name:"Java"},
        {img:'icons/javascript.svg',name:"Javascript"},
    ]
  return (
    <div className={`flex w-[100vh] h-[200px] md:w-[900px] md:h-[300px]`}>
        {langs.map(lang=>(
            <div className={`${styles.card} aspect-auto w-[calc(100%/5+10px)] md:w-[200px]`}  key={lang.name} onClick={()=>console.log(lang)}>
                <img src={lang.img} alt={lang.name} className=' w-1/2 h-1/2 object-contain'/>
                <h1>{lang.name}</h1>
                <div className='w-2/3 h-2 bg-black rounded-md'></div>
                <div className='w-2/3 h-2 bg-black rounded-md'></div>
                <div className='w-2/3 h-2 bg-black rounded-md hidden md:block'></div>
            </div>
        ))}
    </div>
  )
}

export default Lang