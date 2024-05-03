'use client'
import Link from "next/link";
import { usePathname} from 'next/navigation'
import {useState} from "react"



const TopNavigation: React.FC = () => {

    
    const pathname = usePathname()



    return(
        <div className="fixed h-18 w-full bg-slate-800">

           <div className="flex justify-center w-full">
            <div className="flex flex-row justify-start w-1/2 h-18">
                <div className="flex flex-row justify-between items-center  w-full h-18">
                <Link className={`px-6 py-5 ${ pathname.includes("/chart-js") && "bg-black"}`} href="/chart-js">Chart JS</Link>
                <Link className={`px-6 py-5 ${ pathname.includes("/#") && "bg-black"}`} href="#">D3</Link>
                <Link className={`px-6 py-5 ${ pathname.includes("/#") && "bg-black"}`} href="#">Metabase</Link>
                <Link className={`px-6 py-5 ${ pathname.includes("/#") && "bg-black"}`} href="#">Raw Graphs</Link>
                </div>
            </div>
            </div> 
        </div>
    )
}
export default TopNavigation;