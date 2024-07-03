'use client'
import Link from "next/link";
import { usePathname} from 'next/navigation'
import {useState} from "react"



const TopNavigation: React.FC = () => {

    
    const pathname = usePathname()
    const pathLength = pathname.split("/").length
    const beforeLink = pathname.split("/")[1]
    const afterLink = pathLength < 3 ? pathname.split("/").slice(3, pathLength): "";



    return(
        <div className="fixed h-16 w-full bg-slate-900 bg-opacity-80 backdrop-blur-sm border-b-[0.02px] border-slate-700">

           <div className="flex justify-end w-full ">
            <div className="flex flex-row justify-center sm:full md:w-3/4 lg:w-1/2 h-16  ">
                <div className="flex flex-row justify-between items-center font-semibold sm:text-xs md:text-sm sm-full md:w-1/2 lg:w-2/3 h-16 text-slate-200">
                <Link className={`px-6 py-5 ${ pathname.includes("/chart-js") && "text-purple-400"}`} href={`/${beforeLink}/chart-js${afterLink}`}>Chart JS</Link>
                <Link className={`px-6 py-5 ${ pathname.includes("/#") && "bg-gray-800"}`} href="#">D3</Link>
                <Link className={`px-6 py-5 ${ pathname.includes("/#") && "bg-black"}`} href="#">Metabase</Link>
                <Link className={`px-6 py-5 ${ pathname.includes("/#") && "bg-black"}`} href="#">Raw Graphs</Link>
                </div>
            </div>
            </div> 
        </div>
    )
}
export default TopNavigation;