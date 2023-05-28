"use client"
import { FaSearch } from "react-icons/fa"
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {

  const route = useRouter();
  const option = ["Stack", "Queue", "Linked_List", "Binary_Tree", "Red-Black_Tree"];
  const [Search, Set] = useState("");

  const ChangePage = () => {
    const Next = option.filter((opo) => {
      return opo=== Search;
    })
    if (Next[0] === undefined) {
      confirm("Not such Data Structure Exist");
    }
    else {
      route.push(`learn/${Next[0]}`);
    }
  }

  return (
    <div className="flex flex-row items-center justify-center gap-1 border-2 border-solid border-black rounded-3xl pe-2 bg-[#545864]">
      <input list="data" type='text' placeholder='    Search' className='rounded-3xl h-8 w-24  text-center text-[#fffff0] bg-[#545864] placeholder:text-[#fffff0]' onChange={(e) => Set(e.target.value)}  />
      <datalist id="data">
        {option.map(opo => (
          <option key={opo} value={opo}>{opo}</option>
        ))}
      </datalist>
      <FaSearch onClick={() => ChangePage()} className=" transition-all hover:scale-125" />
    </div>
  )
}

export default Search