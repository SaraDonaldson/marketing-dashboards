import React, { useEffect, useState } from 'react'
import {createContext, useContext} from "react"
import { stateContext } from "./ContextDynamicSVG"
import ChoroplethTooltip from './ChoroplethTooltip'
import DynamicSVGChoropleth from './DynamicSVGChoropleth'

interface StateData{
    stateName:  string;
    stateCode:  string;
    dSVGData:   string;
    color:      string;
    setColor: (color: string) => void;
    clicks:     number;
  
  }
  
  interface StatesChoroplethSVGData {
    width: number,
    height: number,
    allStatesStyling: string;
    states: StateData []
}
type ChoroplethSVGContext = {
    choroplethSVGData: StatesChoroplethSVGData;
}


function ControllerDynamicSVG() {
    const {  choroplethSVGData} = useContext<ChoroplethSVGContext>(stateContext);
    const [dataCategoryPoints, setDataCategoryPoints] = useState<(string | number)[][]>([
        [ 75, 125 , 200, 250],
        ["bg-cyan-100", "bg-cyan-300","bg-cyan-500", "bg-cyan-700"]
         ])
         const [focusOnState, setFocusOnState,] = useState<StateData>({stateName: "", stateCode: "",  dSVGData: "", color: "", setColor: () => {}, clicks: 0});

         function assignColor(stateData:StateData){
          let  stateColor = stateData.clicks <= 75 ? "fill-cyan-100" 
                            : stateData.clicks <= 125 ?  "fill-cyan-300" : 
                            stateData.clicks <= 200 ? "fill-cyan-500":
                            stateData.clicks <= 250 ? "fill-cyan-700":
                            "fill-cyan-800"
           stateData.color =stateColor;
        }
        function sortColors(){
            choroplethSVGData.states.forEach((state: StateData)=> {     
                assignColor(state)
                console.log(state.color)
            })
          
        }   

        function handleChoroplethTooltipFocus(state:StateData): void{
            setFocusOnState(state)
         }

        useEffect(() => {
            sortColors()
        }, [])
        
  return (
    <div>

        <ChoroplethTooltip
          stateData = {focusOnState}
          />
            <DynamicSVGChoropleth
            SVGData= { choroplethSVGData}
            setTooltip = {e => handleChoroplethTooltipFocus(e)}
            />

    </div>
  )
}

export default ControllerDynamicSVG