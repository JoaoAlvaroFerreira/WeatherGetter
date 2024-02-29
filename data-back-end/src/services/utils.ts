export interface Location {
    display_name: string;
    lat: number;
    lon: number;
};

export function parseData(data: any, measure: string): any{

    let croppedDate = [];
    let vals = [];
    for(let i = 0; i < data['daily']['time'].length; i++){
        vals.push(data['daily'][measure][i])
        croppedDate.push(data['daily']['time'][i].toString().slice(4,10));
    }
    return {
        labels: croppedDate,
        datasets: [
          {
            label: measure,
            backgroundColor: "#f87979",
            data: vals
          },
        ],
      }
}

export function convertDate(date: string): string{

    return date.slice(6,10) + '-' + date.slice(3,5) + '-' + date.slice(0,2);
}