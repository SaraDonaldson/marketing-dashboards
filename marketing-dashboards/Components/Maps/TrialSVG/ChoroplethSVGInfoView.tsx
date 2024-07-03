'use client'


const stateViewInfo = {
    stateName: "Texas",
    clicksPerView: 15000/200,
    views: 15000,
    clicks: 200,
}

function ChoroplethSVGInfoView({}) {
    

    return (
      <div className='bg-slate-700 w-fit p-3 flex flex-col text-xs text-purple-200'>
            <span className="text-sm font-semibold">{stateViewInfo.stateName}</span>
            <span>Clicks per view: {stateViewInfo.clicksPerView}</span>
            <span>Views: {stateViewInfo.views}</span>
            <span>Clicks: {stateViewInfo.clicks}</span>
    
    </div>
    )
  }
  
  export default ChoroplethSVGInfoView;