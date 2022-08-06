import { WeatherActionTypes, WeatherState } from "../../../type/typeWeather"


export const initialState: WeatherState = {
    oneDay: {
        temp: '',
        city: '',
        humidity: '',
        pressure: '',
        weather: [''],
        speed: ''
    },
    days: [],
    clockDays: [],
    coord: {
        lat: 0,
        lon: 0,
    },
    city: '',
    loader: false,
    error: null
} 

export function reducerWeatherForecast(state = initialState, action: any): WeatherState {
    switch ( action.type) {
        case WeatherActionTypes.LOADING_CITY:
            return {...state, city: action.payload, error: null}
        case WeatherActionTypes.LOADER_CHANGE:
            const loaders = !state.loader
            return {...state, loader: loaders}
        case WeatherActionTypes.LOADING_WEATHER:
            console.log( action.payload, ' action.payload');
            return {...state, oneDay: {
                temp: action.payload.data.main.temp,
                city: action.payload.data.name,
                humidity: action.payload.data.main.humidity,
                pressure: action.payload.data.main.pressure,
                weather: action.payload.data.weather,
                speed: action.payload.data.wind.speed
            },
            coord: {
                lat: Number(action.payload.data.coord.lat),
                lon: Number(action.payload.data.coord.lon)
            },
            error: action.payload.message ? action.payload.message : null
        }
        case WeatherActionTypes.ERROR_WEATHER:
            return {...state, error: action.payload}
        case WeatherActionTypes.LOADING_DAYS:
            console.log(action.payload.clockDays, 'root');
            
            return {...state, days: action.payload.days, clockDays: action.payload.clockDays}
        default:
            return state
    }
}
