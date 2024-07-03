'use client'
import Link from "next/link";
import { usePathname} from 'next/navigation'
import {useState} from "react"
import DrawerMenu from "../DrawerMenu/DrawerMenu";



const InternalNavBar: React.FC = () => {
   
    const pathname = usePathname()
    const [isAdmin, setIsAdmin] = useState<boolean>(pathname.includes("admin") ? true : false)
    const internalNavTitle =  pathname.includes("admin")? "Marketing Agency Team": "Client View";
    const backgroundColor = isAdmin ? 'bg-indigo-950' : 'bg-pink-400';


    return(
        <div className={`relative h-12 w-full${pathname.includes("admin") && 'bg-indigo-950'}`}>

           <div className="flex w-full justify-start flex-row h-18">
           
                <div className="flex flex-row justify-between w-2/3 h-18">
                    <span>{internalNavTitle}</span>
                    <div>Select Client</div>
                {/* <Link className={`px-6 py-5 ${ pathname.includes("/chart-js") && "bg-black"}`} href="/chart-js">Chart JS</Link> */}
          
                </div>
        
            </div> 
        </div>
    )
}
export default InternalNavBar;