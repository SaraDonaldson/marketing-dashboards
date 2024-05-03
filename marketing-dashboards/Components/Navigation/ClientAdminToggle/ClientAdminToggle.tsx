'use client'
import Link from "next/link";
import {useState} from "react"
import { usePathname} from 'next/navigation'


// ----- Future
// I would like to animate the slide - the ball and the color
// This will need to be part of larger context/state and routing, local storage, etc.

const ClientAdminToggle: React.FC = () => {
    const pathname = usePathname()
    const [toggleAdmin, setToggleAdmin] = useState<boolean>(true);
    const [toggleClient, setToggleClient] = useState<boolean>(false);

        function handleToggle(){
    
            setToggleAdmin((state) => !state);
            setToggleClient((state) => !state)
        }

    return(
        <div className="flex flex-col mr-4 w-44">
            <span className="flex justify-center align-center m-2">View</span>
            {toggleAdmin &&
            <div className="inline-flex items-center mb-5 cursor-pointer" onClick={e => handleToggle()}>
                <span className="relative top-[2px] start-[2px] me-3 ms-3 text-sm font-medium text-transparent">Client</span>  
            <div className="relative w-11 h-6 rounded-full dark:bg-gray-700 outline-none focus:ring-4  focus:ring-blue-300 ">
                <div className=" x-full border-white  absolute top-[2px] end-[2px]
                 bg-white border rounded-full h-5 w-5  dark:border-gray-600"></div> 
            </div>
            <span className="relative top-[2px] end-[2px] ms-3 me-3 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</span>
            
            </div>
            }
            {toggleClient &&
               <div className="inline-flex  items-center mb-5 cursor-pointer" onClick={e => handleToggle()} >

                <span className="relative top-[2px] start-[2px] me-3 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Client</span> 

               <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4
                peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-pink-400 peer-checked:after:translate-x-full 
                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
                  peer-checked:bg-blue-600"></div>
                <span className="relative top-[2px] end-[2px] ms-3 me-3 text-sm font-medium text-transparent">Admin</span>
               </div>
            
            }

        </div>
    )
}
export default ClientAdminToggle;