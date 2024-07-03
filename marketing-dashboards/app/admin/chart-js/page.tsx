import BarChart from "@/Components/Charts/ChartJs/BarChart/BarChart";
import DashboardSelectBar from "@/Components/Dashboard/DashboardSelectBar/DashboardSelectBar";
// import DonutChart from "@/components/Charts/DonutChart/DonutChart";
// import LineChart from "@/components/Charts/LineChart/LineChart";

export default async function index() {
  return (
    <div className="h-full bg-transparent">
      <div className="w-2/3 m-auto">
      <DashboardSelectBar/>
      </div>

      <div className="bg-transparent w-full">

      <div className=" bg-slate-800 rounded-lg w-4/5 place-items-center justify-center inline-grid grid-cols-2 gap-2 ">
        <div className="flex grow rounded border-2 border-gray-700 bg-black w-auto col-span-1">
          <BarChart />
        </div>
        <div className="flex w-96 h-96 rounded border-2 border-gray-700 bg-black col-span-1">
          {/* <LineChart /> */}

          
        </div>
        <div className="flex rounded border-2 border-gray-700 bg-black w-auto col-span-1">
          {/* <DonutChart /> */}
        </div>
      </div>
      </div>
    </div>
  );
}