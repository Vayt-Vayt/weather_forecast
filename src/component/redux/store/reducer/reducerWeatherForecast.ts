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
    clockDays: [
 {dt:1655748000,main:{temp:289.91,feels_like:289.31,temp_min:289.38,temp_max:289.91,pressure:1006,sea_level:1006,grnd_level:989,"humidity":64,"temp_kf":0.53},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":65},"wind":{"speed":2.56,"deg":263,"gust":5.13},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-20 18:00:00"},
 {dt:1655758800,main:{temp:287.4,feels_like:286.84,"temp_min":287.4,"temp_max":287.4,"pressure":1006,"sea_level":1006,"grnd_level":988,"humidity":75,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":78},"wind":{"speed":1.63,"deg":297,"gust":3.61},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-20 21:00:00"},
 {dt:1655769600,main:{temp:287.23,feels_like:286.68,temp_min:287.23,temp_max:287.23,pressure:1004,sea_level:1004,grnd_level:987,humidity:76,temp_kf:0},weather:[{id:804,main:'Clouds' ,description:'overcast clouds',icon:'04n'}],clouds:{all:87},wind:{speed:0.34,deg:64,gust:0.55},visibility:10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-21 00:00:00"},
 {dt:1655780400,main:{temp:287.17,feels_like:286.61,temp_min:287.17,temp_max:287.17,pressure:1003,sea_level:1003,grnd_level:986,humidity:76,temp_kf:0},weather:[{id:804,main:'Clouds',description:'overcast clouds',icon:'04d'}],clouds:{all:100},wind:{speed:1.17,"deg":137,"gust":1.98},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-21 03:00:00"},
 {dt:1655791200,main:{temp:285.92,feels_like:285.52,temp_min:285.92,temp_max:285.92,pressure:1003,sea_level:1003,grnd_level:986,humidity:87,temp_kf:0},weather:[{id:500,main:'Rain',description:'light rain"',"icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.12,"deg":47,"gust":3.16},"visibility":10000,"pop":0.8,"rain":{"3h":1.09},"sys":{"pod":"d"},"dt_txt":"2022-06-21 06:00:00"},
 {dt:1655802000,main:{temp:284.95,feels_like:284.59,temp_min:284.95,temp_max:284.95,pressure:1003,sea_level:1003,grnd_level:985,humidity:92,temp_kf:0},weather:[{id:500,main:'Rain',description:"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.78,"deg":92,"gust":5.45},"visibility":10000,"pop":1,"rain":{"3h":1.74},"sys":{"pod":"d"},"dt_txt":"2022-06-21 09:00:00"},
 {dt:1655812800,main:{temp:285.01,feels_like:284.71,temp_min:285.01,temp_max:285.01,pressure:1002,sea_level:1002,grnd_level:984,humidity:94,temp_kf:0},weather:[{id:500,main:'Rain',description:"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.68,"deg":91,"gust":6.2},"visibility":10000,"pop":1,"rain":{"3h":0.68},"sys":{"pod":"d"},"dt_txt":"2022-06-21 12:00:00"},
 {dt:1655823600,main:{temp:284.92,feels_like:284.61,temp_min:284.92,temp_max:284.92,pressure:1001,sea_level:1001,grnd_level:984,humidity:94,temp_kf:0},weather:[{id:501,main:'Rain',description:"moderate rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":1.73,"deg":113,"gust":4.82},"visibility":9434,"pop":0.8,"rain":{"3h":3.52},"sys":{"pod":"d"},"dt_txt":"2022-06-21 15:00:00"},
 {dt:1655834400,main:{temp:284.45,feels_like:284.12,temp_min:284.45,temp_max:284.45,pressure:1001,sea_level:1001,grnd_level:983,humidity:95,temp_kf:0},weather:[{id:500,main:'Rain',description:"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.1,"deg":103,"gust":7.85},"visibility":10000,"pop":0.8,"rain":{"3h":2.03},"sys":{"pod":"d"},"dt_txt":"2022-06-21 18:00:00"},
 {dt:1655845200,main:{temp:284.16,feels_like:283.82,temp_min:284.16,temp_max:284.16,pressure:1000,sea_level:1000,grnd_level:983,humidity:96,temp_kf:0},weather:[{id:500,main:'Rain',description:"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":2.82,"deg":63,"gust":8.01},"visibility":10000,"pop":0.46,"rain":{"3h":0.28},"sys":{"pod":"n"},"dt_txt":"2022-06-21 21:00:00"},
 {dt:1655856000,main:{temp:284.1,"feels_like":283.73,"temp_min":284.1,"temp_max":284.1,"pressure":1000,"sea_level":1000,"grnd_level":982,"humidity":95,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":3.53,"deg":67,"gust":10.18},"visibility":10000,"pop":0.46,"sys":{"pod":"n"},"dt_txt":"2022-06-22 00:00:00"},
 {dt:1655866800,main:{temp:284.27,feels_like:283.89,temp_min:284.27,"temp_max":284.27,"pressure":1000,"sea_level":1000,"grnd_level":983,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":3.52,"deg":50,"gust":10.28},"visibility":10000,"pop":0.29,"rain":{"3h":0.12},"sys":{"pod":"d"},"dt_txt":"2022-06-22 03:00:00"},
 {dt:1655877600,main:{temp:285.94,feels_like:285.6,temp_min:285.94,"temp_max":285.94,"pressure":1002,"sea_level":1002,"grnd_level":984,"humidity":89,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":4.31,"deg":62,"gust":10.43},"visibility":10000,"pop":0.36,"sys":{"pod":"d"},"dt_txt":"2022-06-22 06:00:00"},
 {dt:1655888400,main:{temp:287.21,feels_like:286.79,temp_min:287.21,"temp_max":287.21,"pressure":1003,"sea_level":1003,"grnd_level":986,"humidity":81,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":4.33,"deg":94,"gust":10.54},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-22 09:00:00"},
 {dt:1655899200,main:{temp:292.51,feels_like:291.94,temp_min:292.51,"temp_max":292.51,"pressure":1004,"sea_level":1004,"grnd_level":987,"humidity":55,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":4.82,"deg":70,"gust":8.65},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-22 12:00:00"},
 {dt:1655910000,main:{temp:293.16,feels_like:292.6,temp_min:293.16,"temp_max":293.16,"pressure":1004,"sea_level":1004,"grnd_level":987,"humidity":53,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":4.42,"deg":74,"gust":9.05},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-22 15:00:00"},
 {dt:1655920800,main:{temp:289.98,feels_like:289.26,temp_min:289.98,"temp_max":289.98,"pressure":1006,"sea_level":1006,"grnd_level":988,"humidity":59,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":4.54,"deg":45,"gust":11.56},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-22 18:00:00"},
 {dt:1655931600,main:{temp:287.05,feels_like:286.38,temp_min:287.05,"temp_max":287.05,"pressure":1007,"sea_level":1007,"grnd_level":990,"humidity":72,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":70},"wind":{"speed":3.37,"deg":29,"gust":10.97},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-22 21:00:00"},
 {dt:1655942400,main:{temp:285.47,feels_like:284.74,temp_min:285.47,"temp_max":285.47,"pressure":1009,"sea_level":1009,"grnd_level":991,"humidity":76,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":82},"wind":{"speed":3.92,"deg":36,"gust":10.99},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-23 00:00:00"},
 {dt:1655953200,main:{temp:286.55,feels_like:285.7,temp_min:286.55,"temp_max":286.55,"pressure":1010,"sea_level":1010,"grnd_level":992,"humidity":67,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":3.97,"deg":41,"gust":12.03},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-23 03:00:00"},
 {dt:1655964000,main:{temp:291,"feels_like":290.2,"temp_min":291,"temp_max":291,"pressure":1011,"sea_level":1011,"grnd_level":993,"humidity":52,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.96,"deg":48,"gust":9.54},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-23 06:00:00"},
 {dt:1655974800,main:{temp:294.48,"feels_like":293.71,"temp_min":294.48,"temp_max":294.48,"pressure":1011,"sea_level":1011,"grnd_level":994,"humidity":40,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":6.07,"deg":49,"gust":8.02},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-23 09:00:00"},
 {dt:1655985600,main:{temp:295.9,"feels_like":295.22,"temp_min":295.9,"temp_max":295.9,"pressure":1012,"sea_level":1012,"grnd_level":994,"humidity":38,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.67,"deg":46,"gust":7.2},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-23 12:00:00"},
 {dt:1655996400,main:{temp:295.27,"feels_like":294.71,"temp_min":295.27,"temp_max":295.27,"pressure":1012,"sea_level":1012,"grnd_level":994,"humidity":45,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.11,"deg":34,"gust":7.23},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-23 15:00:00"},
 {dt:1656007200,main:{temp:291.52,"feels_like":291.01,"temp_min":291.52,"temp_max":291.52,"pressure":1014,"sea_level":1014,"grnd_level":996,"humidity":61,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":4.38,"deg":33,"gust":10.08},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-23 18:00:00"},
 {dt:1656018000,main:{temp:288.87,"feels_like":288.33,"temp_min":288.87,"temp_max":288.87,"pressure":1014,"sea_level":1014,"grnd_level":997,"humidity":70,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":3.51,"deg":30,"gust":9.82},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-23 21:00:00"},
 {dt:1656028800,main:{temp:287.23,"feels_like":286.57,"temp_min":287.23,"temp_max":287.23,"pressure":1015,"sea_level":1015,"grnd_level":997,"humidity":72,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":31},"wind":{"speed":3.64,"deg":26,"gust":11.46},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-24 00:00:00"},
 {dt:1656039600,main:{temp:288.29,"feels_like":287.66,"temp_min":288.29,"temp_max":288.29,"pressure":1015,"sea_level":1015,"grnd_level":997,"humidity":69,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":1},"wind":{"speed":3.81,"deg":31,"gust":10.57},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-24 03:00:00"},
 {dt:1656050400,main:{temp:293.85,"feels_like":293.28,"temp_min":293.85,"temp_max":293.85,"pressure":1015,"sea_level":1015,"grnd_level":998,"humidity":50,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":16},"wind":{"speed":4.8,"deg":43,"gust":8.73},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-24 06:00:00"},
 {dt:1656061200,main:{temp:297.3,"feels_like":296.71,"temp_min":297.3,"temp_max":297.3,"pressure":1015,"sea_level":1015,"grnd_level":997,"humidity":36,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":38},"wind":{"speed":6.03,"deg":49,"gust":8.26},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-24 09:00:00"},
 {dt:1656072000,main:{temp:298.56,"feels_like":298.02,"temp_min":298.56,"temp_max":298.56,"pressure":1014,"sea_level":1014,"grnd_level":998,"humidity":33,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":21},"wind":{"speed":6.01,"deg":47,"gust":7.8},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-24 12:00:00"},
 {dt:1656082800,main:{temp:297.58,"feels_like":297.15,"temp_min":297.58,"temp_max":297.58,"pressure":1015,"sea_level":1015,"grnd_level":998,"humidity":41,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":21},"wind":{"speed":5.96,"deg":45,"gust":7.31},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-24 15:00:00"},
 {dt:1656093600,main:{temp:293.76,"feels_like":293.31,"temp_min":293.76,"temp_max":293.76,"pressure":1016,"sea_level":1016,"grnd_level":999,"humidity":55,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":46},"wind":{"speed":4.74,"deg":39,"gust":10.62},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-24 18:00:00"},
 {dt:1656104400,main:{temp:290.9,"feels_like":290.45,"temp_min":290.9,"temp_max":290.9,"pressure":1017,"sea_level":1017,"grnd_level":1000,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":6},"wind":{"speed":3.88,"deg":46,"gust":11.48},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-24 21:00:00"},
 {dt:1656115200,main:{temp:288.72,"feels_like":288.34,"temp_min":288.72,"temp_max":288.72,"pressure":1018,"sea_level":1018,"grnd_level":1001,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":5},"wind":{"speed":2.98,"deg":52,"gust":9.28},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-06-25 00:00:00"},
 {dt:1656126000,main:{temp:289.29,"feels_like":288.79,"temp_min":289.29,"temp_max":289.29,"pressure":1019,"sea_level":1019,"grnd_level":1001,"humidity":70,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":1},"wind":{"speed":3.74,"deg":58,"gust":8.76},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-25 03:00:00"},
 {dt:1656136800,main:{temp:294.53,"feels_like":293.95,"temp_min":294.53,"temp_max":294.53,"pressure":1020,"sea_level":1020,"grnd_level":1002,"humidity":47,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":6},"wind":{"speed":4.94,"deg":68,"gust":8.44},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-25 06:00:00"},
 {dt:1656147600,main:{temp:297.94,"feels_like":297.39,"temp_min":297.94,"temp_max":297.94,"pressure":1019,"sea_level":1019,"grnd_level":1002,"humidity":35,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":13},"wind":{"speed":5.73,"deg":76,"gust":7.81},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-06-25 09:00:00"},
 
    ],
    coord: {
        lat: 0,
        lon: 0,
    },
    city: '',
    loader: false,
    error: null
} 

// {main:
//     {temp: '10',
//     humidity: '10',
//     pressure: '10'
//     }},
//     {wind: {speed: '10'}}, 
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