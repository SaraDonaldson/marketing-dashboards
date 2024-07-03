import BarChart from "@/Components/Charts/ChartJs/BarChart/BarChart";
import DashboardSelectBar from "@/Components/Dashboard/DashboardSelectBar/DashboardSelectBar";
// import DonutChart from "@/components/Charts/DonutChart/DonutChart";
// import LineChart from "@/components/Charts/LineChart/LineChart";

export default async function index() {
  return (
    <div className="h-full mt-24">
      <div className="w-2/3 m-auto">
      <DashboardSelectBar/>
      </div>

      <div className="absolute top-36 w-full">
      
      </div>
    </div>
  );
}