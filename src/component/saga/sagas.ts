import { call, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { WeatherActionTypes } from "../type/typeWeather";
import { errorWeather, loaderCity, loadingDaysClocks, loadingWeather } from '../redux/store/action/actionWeather';
import { store } from '../redux';


export function* sagaWatcher() {
    yield  takeEvery(WeatherActionTypes.LOADING_WEATHER_GO, sagaWorker)
    yield  takeEvery(WeatherActionTypes.LOAD_DAYS, sagaWorkers)
}

function* sagaWorker() {
    const state = store.getState().weater
    const citys = state.city
    try{
        yield put( loaderCity())
        const payload: any[] = yield  call(() => axiosWeather(citys))
        yield put(loadingWeather(payload))
    } catch (error: any) {
        yield put(errorWeather(error.message))
    } finally {
        yield put(loaderCity())
    }

}

export async function axiosWeather(city: string) {
    const key =  WeatherActionTypes.API_KEY;
    const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=${key}&units=metric&lang=ru`)
    return responce
}

function* sagaWorkers() {
    const state = store.getState().weater
    const lat = state.coord.lat
    const lon = state.coord.lon
    try{
        const payload: {data:any} = yield  call(() => axiosWeatherForDay(lat, lon)) 
        const days: any = payload.data.list.filter((reading:any) => reading.dt_txt.includes('18:00:00'))
        const clockDays: any = payload.data.list
        yield put(loadingDaysClocks(days, clockDays))
    } catch (error: any) {
        yield put(errorWeather(error.message))
    }

}

 export async function axiosWeatherForDay(lat: number, lon: number) {
    const key =  WeatherActionTypes.API_KEY;
    const responce = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`)
    return responce
}