


export interface StateData{
    stateName:  string;
    stateCode:  string;
    dSVGData:   string;
    color:      string;
    setColor: (color: string) => void;
    clicks:     number;
  }
  
export interface StatesChoroplethSVGData {
    width: number,
    height: number,
    allStatesStyling: string;
    states: StateData []
}


export type ChoroplethSVGContext = {
    choroplethSVGData: StatesChoroplethSVGData;
}