
'use client'

import { useEffect, useRef, useState } from "react";
import SVGMap from "./SVGMap";

const clicksPerState = [
  {stateName: "MA",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "MN",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "MT",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "ND",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "HI",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "ID",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "WA",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "AZ",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "CA",  clicks:Math.floor(Math.random() * 300), color:""},
  {stateName: "CO",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NV",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NM",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "OR",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "UT",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "WY",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "AR",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "IA",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "KS",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "MO",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NE",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "OK",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "SD",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "LA",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "TX",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "CT",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NH",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "RI",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "FL",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "VT",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "AL",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "GA",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "MS",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "SC",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "IL",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "IN",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "KY",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NC",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "OH",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "TN",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "VA",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "WI",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "WV",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "DE",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "DC",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "MD",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NJ",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "NY",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "PA",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "ME",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "MI",  clicks:Math.floor(Math.random() * 300), color:""}, 
  {stateName: "AK",  clicks:Math.floor(Math.random() * 300), color:""}, 
]
const stateColors= {
    MA: "",
    MN: "",
    MT: "",
    ND: "",
    HI: "",
    ID: "",
    WA: "",
    AZ: "",
    CA: "",
    CO: "",
    NV: "",
    NM: "",
    OR: "",
    UT: "",
    WY: "",
    AR: "",
    IA: "",
    KS: "",
    MO: "",
    NE: "",
    OK: "",
    SD: "",
    LA: "",
    TX: "",
    CT: "",
    NH: "",
    RI: "",
    VT: "",
    AL: "",
    FL: "",
    GA: "",
    MS: "",
    SC: "",
    IL: "",
    IN: "",
    KY: "",
    NC: "",
    OH: "",
    TN: "",
    VA: "",
    WI: "",
    WV: "",
    DE: "",
    DC: "",
    MD: "",
    NJ: "",
    NY: "",
    PA: "",
    ME: "",
    MI: "",
    AK: "",
}

const TrialSVG: React.FC = () => {
  const [SVGColors, setSVGColors] = useState({})
  const[dataSVGReady, setDataSVGReady] = useState<boolean>(false)
  const[ heightSVG, setHeightSVG ] = useState<number>()
  const[SVGsizing, setSVGsizing] = useState<string>()
  const[widthSVG, setWidthSVG]= useState<number>()

  

    let fewestViews = "fill-cyan-100"
    let fewViews = "fill-cyan-300"
    let moderateViews = "fill-cyan-500"
    let moderateManyViews = "fill-cyan-700"
    let manyViews = "fill-cyan-800"

    
    useEffect(() => {
        sortColors()
        calculateSVGHeight(500)
    }, [])

    useEffect(() =>{

    },[])
    

    //SVG Size function to create the aspect ratio proportionately 
    // (parent width / aspect width) * aspect height = new height based on new width
     function calculateSVGHeight(parentWidth:number){
          let aspectWidth=1000
          let aspectHeight= 589

          setHeightSVG( Math.floor((parentWidth / aspectWidth) * aspectHeight))
          setWidthSVG(parentWidth)
          setSVGsizing(`w-[${parentWidth}px] h-[${Math.floor((parentWidth / aspectWidth) * aspectHeight)}px]`)
          console.log(heightSVG, widthSVG, SVGsizing)
          setDataSVGReady(true);
     }

    function assignColor(stateData){
        stateData.color = stateData.clicks <= 75 ? "fill-cyan-100" 
                        : stateData.clicks <= 125 ?  "fill-cyan-300" : 
                        stateData.clicks <= 200 ? "fill-cyan-500":
                        stateData.clicks <= 250 ? "fill-cyan-700":
                        "fill-cyan-800"
        return stateData
    }
    

    function sortColors(){
        clicksPerState.forEach((state)=> {     
            assignColor(state)
            // assigning to colors object
            Object.keys(stateColors).forEach((item) => {
            if(item == state.stateName) {
                stateColors[item] = state.color;
            }
        })
        })
        console.log(stateColors)
        setSVGColors(stateColors)
    }         

      
    



return(
<div className="flex flex-col content-start justify-center w-fit">
   
   {dataSVGReady && 
    <div className= {``} > 
    <SVGMap 
    SVGColors = {SVGColors}
    sizing={SVGsizing}
    heightSVG = {heightSVG }
    widthSVG ={widthSVG }
    />
    </div>
    }
</div>
)
}
export default TrialSVG;