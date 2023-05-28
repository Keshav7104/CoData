import React from 'react'
import Link from 'next/link';

const Menu = ({ type }) => {
  const options2 = [
    { name: "Stack", more: false, array: [] },
    { name: "Queue", more: true, array: ["Priority_Queue", "Search_Queue", "Double_Queue"] },
    { name: "Linked_List", more: false, array: [] },
    { name: "Heap", more: false, array: [] },
    { name: "Binary_Tree", more: true, array: ["Red-Black_Tree", "Binary-Search_Tree"] },
  ]


  return (
    <div className="flex flex-col ms-1 border-2 border-solid border-black w-[148px] h-max fixed">
      {options2.map((option) => (
        <h2 className=' w-36 bg-[#fffff0] flex items-stretch flex-col [&>ul]:block [&>ul]:hover:opacity-100' key={option.name} >
          <Link href={`${type}/${option.name}`} className={`flex hover:bg-[#545864] hover:text-[#fffff0] [&>span]:hover:rotate-[270] cursor-pointer p-2`}>{option.name}
            <span className={`w-4 h-4 bg-black absolute right-1 menu rotate-90 ${option.more ? "inline-block" : "hidden"}`} />
          </Link>
          {option.more && <ul className='diss '>
            {option.array.map((opo) => (
              <li><Link className='block w-32 relative ps-2 pb-1 float-right hover:bg-[#545864] hover:text-[#fffff0]' href={`${type}/${opo}`} key={opo}>{opo}</Link>
              </li>
            ))}
          </ul>}
        </h2>
      ))}
    </div>
  )
}

export default Menu