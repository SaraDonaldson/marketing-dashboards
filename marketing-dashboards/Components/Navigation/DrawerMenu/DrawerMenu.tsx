
'use client'
import Link from "next/link";
import {useState} from "react"
import { VscGraphLine } from "react-icons/vsc";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoCloseCircleSharp } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { RiFolderSettingsLine } from "react-icons/ri";
import { usePathname} from 'next/navigation'


const DrawerMenu: React.FC = () => {
   const pathname = usePathname()
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const handleDrawer = (val:boolean) => {
      setOpenDrawer(val);
   }
   
return (
    <div>
    
{!openDrawer && 
    <div className="fixed top-0 left-0 bg-transparent" >
        <div className="w-64 fixed top-5 left-5 bg-transparent">
            <button 
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-md"
            onClick={e => handleDrawer(true)}>Options</button>
        </div>
        </div>
}

 { openDrawer && 
    <div className="h-screen fixed top-0 left-0 bg-transparent w-64 z-40" >
    <div  className="h-screen flex flex-col z-40 py-4 pl-4 pr-2 overflow-y-auto bg-gray-900 
    transition-transform ease-in-out duration-1000">
    <div className="flex justify-end">
        <button className="text-2xl"
         onClick={e =>handleDrawer(false)}
        ><IoCloseCircleSharp /></button>
    </div>

    <h5 className="p-4 font-semibold uppercase text-slate-300">Menu</h5>
  <div className="py-4 overflow-y-auto">
      <div className="space-y-2 font-medium">
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
      
        </div>
        </div>
    </div>
    </div>
        }
</div>
);
};

export default DrawerMenu;