import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import  createSagaMiddleware  from 'redux-saga';
import { reducerWeatherForecast } from "./store/reducer/reducerWeatherForecast";
import { sagaWatcher } from "../saga/sagas";



const rootReducer = combineReducers({
    weater: reducerWeatherForecast
})

export type RootState = ReturnType<typeof rootReducer> 

const saga = createSagaMiddleware()
export const store = createStore(rootReducer, 
    applyMiddleware(thunk, saga)
)

saga.run(sagaWatcher)