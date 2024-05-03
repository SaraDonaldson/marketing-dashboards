import DynamicDropdown from "./DynamicDropdown/DynamicDropdown";

const clientList: string[] = ["Super Auto", "Petmart", "Puzzle Zone"];
const clientTitle : string = "All Clients";
const timeList: string[] = ["Past Month", "Three Months", "Six Months", "Year", "By Month", "By Year"];
const timeTitle : string = "Select Range";
const campaignList: string[] = ["All Campains", "Petmart", "Puzzle Zone"];
const campaignTitle : string = "Select Campaign";

const DashboardSelectBar: React.FC = () => {
    
    return(

       <div className="w-full flex flex-row justify-between">
        <div>
            <DynamicDropdown
            dropdownTitle = {clientTitle}
            options = {clientList}
            />
        </div>
        <div>
        <DynamicDropdown
            dropdownTitle = {timeTitle}
            options = {timeList}
            />
        </div>
        <div>  
            <DynamicDropdown
            dropdownTitle = {campaignTitle}
            options = {campaignList}
            />
        </div>

       </div>
    )
}
export default DashboardSelectBar;