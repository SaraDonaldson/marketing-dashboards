import React, { useState } from 'react'

interface StateData{
    stateName:  string;
    stateCode:  string;
    dSVGData:   string;
    color:      string;
    clicks:     number;
  
  }


function ControllerDynamicSVG() {

    const [dataCategoryPoints, setDataCategoryPoints] = useState<(string | number)[][]>([
        [ 75, 125 , 200, 250],
        ["bg-cyan-100", "bg-cyan-300","bg-cyan-500", "bg-cyan-700"]
         ])

         function assignColor(stateData:StateData){
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

  return (
    <div>ControllerDynamicSVG</div>
  )
}

export default ControllerDynamicSVG