"use client"

import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";



interface DynamicDropdownProps{
    dropdownTitle: string,
    options: string[] 
}



const DynamicDropdown = ({dropdownTitle, options }:DynamicDropdownProps) => {
    const[openDropdown, setOpenDropdown]= useState<boolean>(false);
    const[dropdownSelected, setDropdownSelected] = useState<string>(dropdownTitle)

    function handleOpenDropdown(){
        setOpenDropdown((state) => !state)
    }
 
    return(
<div className="px-5 py-5 flex flex-col justify-start content-center h-64 z-30"
    onMouseLeave ={e=>setOpenDropdown(false)}>
<button 
    onMouseOver={e=>setOpenDropdown(true)}
    
className="w-44 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
 text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-slate-700 dark:hover:bg-slate-500 dark:focus:ring-blue-800" 
>{dropdownSelected}  <MdOutlineArrowDropDown className="ml-2 text-2xl"/></button>
 {openDropdown && 

<div  className="z-30 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
onMouseLeave={handleOpenDropdown}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {options.map((element, index )=> (
            <li key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={e=> setDropdownSelected(element)}
                >{element}</a>
              </li>
              ))}
    </ul>
</div>

}
</div>
)
}
export default DynamicDropdown