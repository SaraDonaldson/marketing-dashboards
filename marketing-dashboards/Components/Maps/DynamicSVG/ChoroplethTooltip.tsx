interface StateData{
  stateName:  string;
  stateCode:  string;
  dSVGData:   string;
  color:      string;
  setColor: (color: string) => void;
  clicks:     number;
}

function ChoroplethTooltip(props:{stateData:StateData}) {
    


    return (
      <div className='w-16 h-4 m-1'>
        {props.stateData.stateName}
        <div className="text-xs">Clicks: {props.stateData.clicks}</div>
        

    </div>
    )
  }
  export default ChoroplethTooltip;