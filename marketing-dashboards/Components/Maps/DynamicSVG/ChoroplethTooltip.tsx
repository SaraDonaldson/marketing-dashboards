interface StateData{
  stateName:  string;
  stateCode:  string;
  dSVGData:   string;
  color:      string;


}

function ChoroplethTooltip(props:{stateData:StateData}) {
    


    return (
      <div className='w-10 h-4'>
        {props.stateData.stateName}

    </div>
    )
  }
  export default ChoroplethTooltip;