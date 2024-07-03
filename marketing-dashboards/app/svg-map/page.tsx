import ChoroplethSection from "@/Components/Maps/TrialSVG/ChoroplethSection";


export default function index() {

    return (
      <div className="flex min-h-screen flex-col w-full mt-16">
        <ChoroplethSection/>
        {/* <span>Choropleth Map of USA</span>
        <span>Clicks {timeFrame}</span> */}
           {/* <div className="border-2 border-green-300 static h-12">
              <DynamicDropdown
              dropdownTitle= "choose timeframe" 
              options = {["this month", "Three months", "six months", "this year", "all time"]}
              />
            </div> */}
          {/* <div className="w-3/4 flex justify-center mt-12">
            <TrialSVG/>
          </div> */}
      </div>
    );
  }