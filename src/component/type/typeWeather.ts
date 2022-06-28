
export interface WeatherState {
    oneDay: {
        temp: any,
        city: any,
        humidity: any,
        pressure: any,
        weather: [any],
        speed: any,
     
    },
    days: [
    ],   
    clockDays: any,
    coord: {
        lat: number,
        lon: number,
    },
    city: string,
    loader: boolean,
    error: null | string
}

export enum WeatherActionTypes  {
    API_KEY = 'cb04f2fce76e9922d42f86978c093306',
    LOADER_CHANGE = 'LOADER_CHANGE',
    LOADING_WEATHER = 'LOADING_WEATHER',
    LOADING_CITY = 'LOADING_CITY',
    LOADING_WEATHER_GO = 'LOADING_WEATHER_GO',
    ERROR_WEATHER = 'ERROR_WEATHER',
    LOAD_DAYS = 'LOAD_DAYS',
    LOADING_DAYS = 'LOADING_DAYS'
}
 interface LoadingrCity {
    type: string,
    payload: string
}

interface LoaderWeather {
    type: string
}

interface LoadingWeather {
    type: string
    payload: any[]
}

interface LoaderWeatherGo {
    type: string
}

interface ErrorWeatherGo {
    type: string,
    payload: string

}

interface LoadingDays {
    type: string,
    payload: {
        days: any,
        clockDays: any, 
    }   
}

export type WeatherAction = 
    LoadingrCity 
    | LoaderWeather 
    | LoadingWeather 
    | LoaderWeatherGo
    | ErrorWeatherGo
    | LoadingDays