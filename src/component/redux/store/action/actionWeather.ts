import { WeatherAction, WeatherActionTypes } from "../../../type/typeWeather";

export function loadingCity(city: string): WeatherAction {
    return {
        type: WeatherActionTypes.LOADING_CITY,
        payload: city,
    }
}

export function loaderCity(): WeatherAction {
    return {
        type: WeatherActionTypes.LOADER_CHANGE,
    }
}

export function loadingWeather(value: any): WeatherAction {
    return {
        type: WeatherActionTypes.LOADING_WEATHER,
        payload: value,
    }
}

export function loadingWeatherGo(): WeatherAction {
    return {
        type: WeatherActionTypes.LOADING_WEATHER_GO,
    }
}

export function errorWeather(error: string): WeatherAction {
    return {
        type: WeatherActionTypes.ERROR_WEATHER,
        payload: error
    }
}

export function loadDays(): WeatherAction {
    return {
        type: WeatherActionTypes.LOAD_DAYS
    }
}

export function loadingDaysClocks(days: any, clockDays:any): WeatherAction {
    return {
        type: WeatherActionTypes.LOADING_DAYS,
        payload: {
            days: days,
            clockDays: clockDays 
        }
    }
}