'use client'
import React from 'react'
import TrialSVG from "@/Components/Maps/TrialSVG/TrialSVG";
import DynamicDropdown from "@/Components/Dashboard/DashboardSelectBar/DynamicDropdown/DynamicDropdown";
import { useState, useContext, useEffect } from "react";
import ChoroplethDataKey from './ChoroplethDataKey';
import { stateInfoContext } from "./ChoroplethContext"
import ChoroplethSVGInfoView from './ChoroplethSVGInfoView';
import DynamicSVGChoropleth from '../DynamicSVG/DynamicSVGChoropleth';
import ChoroplethTooltip from '../DynamicSVG/ChoroplethTooltip';

interface StateData{
  stateName:  string;
  stateCode:  string;
  dSVGData:   string;
  color:      string;


}


function ChoroplethSection() {
    const { showInfoView} = useContext(stateInfoContext);
    const [timeFrame, setTimeFrame] = useState<string>("this month");
    const [mapTitle,setMapTitle] = useState<string>("Choropleth Map of USA Sample");
    const [mapDataDescription, setMapDataDescription] =useState<string>("Ad clicks per view ");
    const [infoViewActive, setInfoViewActive]= useState<boolean>(showInfoView);
    const [dataCategoryPoints, setDataCategoryPoints] = useState<(string | number)[][]>([
        [ 75, 125 , 200, 250],
        ["bg-cyan-100", "bg-cyan-300","bg-cyan-500", "bg-cyan-700"]
         ])
    const [focusOnState, setFocusOnState,] = useState<StateData>({stateName: "", stateCode: "",  dSVGData: "", color: ""});
         
         useEffect(() => {
            setInfoViewActive(showInfoView)
         }, [showInfoView])
     
    function handleChoroplethTooltipFocus(state:StateData): void{
        setFocusOnState(state)
     }

  return (
    <div className='w-9/10'>
    <div className='flex flex-col ml-[10%]'>
    <span className='sm:text-md md:text-lg w-3/4 text-purple-300 '
         >{mapTitle}</span>
     </div>
   
       {/* <div className="border-2 border-green-300 static h-12">
          <DynamicDropdown
          dropdownTitle= "choose timeframe" 
          options = {["this month", "Three months", "six months", "this year", "all time"]}
          />
        </div> */}
        
        <div className=' mt-12 w-3/4 flex justify-center'>
        {showInfoView &&
            <ChoroplethSVGInfoView
            />
        }
        </div>
     

        <div className="xs:w-full md:w-3/4 flex justify-center mt-16 xs:px-8 xs:scale-[0.35] sm:scale-[.8] lg:scale-none xl:scale-[1.25]">
        <TrialSVG
        />
        </div>
        


        <div className='flex justify-center flex-col mt-16'>
        <span className='sm:text-sm md:text-md xs:w-full md:w-3/4 flex pb-5'
        >{mapDataDescription}{timeFrame}</span>
        
        <div className='xs:w-full md:w-3/4 flex'>
            <ChoroplethDataKey
            dataCategoryPoints = {dataCategoryPoints}
            />
        </div>

        <div className='mt-32'>
          <ChoroplethTooltip
          stateData = {focusOnState}
          />
            <DynamicSVGChoropleth
            setTooltip = {e => handleChoroplethTooltipFocus(e)}
            />
        </div>
        </div>
      

    </div>
 
  )
}

export default ChoroplethSection