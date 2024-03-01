export interface Location {
    display_name: string;
    lat: number;
    lon: number;
};

export function parseData(dataMin: any, dataMax: any): any{

    let croppedDate = [];
    let minVals = [];
    let maxVals = [];
    for(let i = 0; i < dataMin['daily']['time'].length; i++){
        minVals.push(dataMin['daily']['temperature'][i]);
        maxVals.push(dataMax['daily']['temperature'][i]);
        croppedDate.push(dataMin['daily']['time'][i].toString().slice(4,10));
    }
    return {
        labels: croppedDate,
        datasets: [
          {
            label: 'Maximum Temperature',
            backgroundColor: "#f87979",
            data: maxVals
          },
          {
            label: 'Minimum Temperature',
            backgroundColor: "#7979F8",
            data: minVals
          }
        ],
      }
}

export function convertDate(date: string): string{

    return date.slice(6,10) + '-' + date.slice(3,5) + '-' + date.slice(0,2);
}