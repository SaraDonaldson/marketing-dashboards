
'use client'
import Link from "next/link";
import {useState} from "react"
import { VscGraphLine } from "react-icons/vsc";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaMapMarkedAlt } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { RiFolderSettingsLine } from "react-icons/ri";
import { usePathname} from 'next/navigation'


const DrawerMenu: React.FC = () => {
   const pathname = usePathname()
   
return (
    <div className="xs:hidden md:flex h-full bg-slate-900 z-30" >
    <div  className="xs:hidden md:flex h-screen md:ml-3 lg:ml-6 xl:ml-12 flex flex-col z-20 pl-6 py-4 bg-slate-900 w-full">


      <span className="sticky pt-24 font-semibold uppercase text-slate-300 py-2">Menu</span>
  <div className="relative py-4 pr-16 w-full scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-slate-900 overflow-y-scroll">
      <div className="space-y-2 xs:text-xs lg:text-sm text-white">
         <div>
            <Link href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaMapMarkedAlt />
               <span className="ms-3">Maps and Geo</span>
            </Link>
         </div>

     
         <div>
            <Link href="/svg-map" className={`flex items-center ms-2 p-2 font-light hover:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${pathname.includes("svg-map") && "text-purple-500 border-l-[0.5px] border-purple-500"} `}>
               <span className={`ms-3 `}>SVG Choropleth Map</span>
            </Link>
         </div>
      

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>

         <div>
         <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-75 group">
         <PiSignOut/> 
               <span className="ms-3">Sign Out</span>
            </a>
         </div>

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <VscGraphLine />
               <span className="ms-3">Dashboard</span>
            </a>
         </div>

         {pathname.includes("admin") &&
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiFolderSettingsLine />
               <span className="ms-3">Manage Clients</span>
            </a>
         </div>
      }

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>

         <div>
         <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-75 group">
         <PiSignOut/> 
               <span className="ms-3">Sign Out</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <VscGraphLine />
               <span className="ms-3">Dashboard</span>
            </a>
         </div>

         {pathname.includes("admin") &&
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiFolderSettingsLine />
               <span className="ms-3">Manage Clients</span>
            </a>
         </div>
      }

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>

         <div>
         <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-75 group">
         <PiSignOut/> 
               <span className="ms-3">Sign Out</span>
            </a>
         </div>

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <VscGraphLine />
               <span className="ms-3">Dashboard</span>
            </a>
         </div>

         {pathname.includes("admin") &&
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiFolderSettingsLine />
               <span className="ms-3">Manage Clients</span>
            </a>
         </div>
      }

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>

         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>
         <div>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMoneyCheck1 />
               <span className="ms-3">Transactions</span>
            </a>
         </div>


         <div>
         <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-75 group">
         <PiSignOut/> 
               <span className="ms-3">Sign Out</span>
            </a>
         </div>
      
        </div>
        </div>
    </div>
  
        
</div>
);
};

export default DrawerMenu;