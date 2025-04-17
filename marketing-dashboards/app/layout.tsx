import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DrawerMenu from "@/Components/Navigation/DrawerMenu/DrawerMenu";
import {  useState} from "react"
import TopNavigation from "@/Components/Navigation/TopNavigation/TopNavigation";
import ClientAdminToggle from "@/Components/Navigation/ClientAdminToggle/ClientAdminToggle";
import InternalNavBar from "@/Components/Navigation/InternalNavBar/InternalNavBar";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing Dashboard",
  description: "Sara Donaldson Developer Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="xs:overflow-y-hidden md:overflow-y-visible bg-slate-900 text-white h-auto bg-gradient-to-tl from-25% from-slate-900 via-40% via-purple-950 to-50% to-slate-900 w-screen" >
       
        <div className="w-full fixed overflow-hidden z-40 bg-transparent">
          <TopNavigation/>
        </div>
      

        {/* <div className="flex flex-row justify-end bg-transparent">
                  <ClientAdminToggle/>
            </div>
         */}
        
        <div className="flex flex-row flex-wrap h-fit w-screen bg-transparent pb-64">
        
            <div className="xs:hidden md:flex flex-initial overflow-x-hidden basis-1/4 h-full bg-slate-900">
            <DrawerMenu />
            </div>
        
            <main className="xs:w-screen xs:justify-center md:w-3/4 relative flex flex-wrap flex-col xs:basis-1/1 md:basis-3/4 bg-transparent h-screen justify-start mt-16">
               {/* <div>
                <InternalNavBar/>
                </div> */}
              <div className={inter.className}>{children}</div>
            </main>
        </div>

        <div className="w-screen z-50">
          <Footer/>
        </div>

      </body>
    </html>
  );
}
