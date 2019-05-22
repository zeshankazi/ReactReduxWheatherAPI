import axios from 'axios';

const API_KEY='c7d218af71d3f6e04ae431d7d0f4f25a';
const Root_URL =`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER'

export function fecthWheather(city){
    const url=`${Root_URL}&q=${city},pak`;
    const request =axios.get(url);

    console.log('Request:',request)
    return{
        type: FETCH_WEATHER,
        payload:request
    };

}