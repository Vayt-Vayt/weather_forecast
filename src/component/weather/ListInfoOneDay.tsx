import React from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './ListWeather.css'

const ListInfoOneDay = ({day}: any) => {
    const ms = day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'})
    
    return (
        <div>
           <section className='container'>
                <h2 className='titls'>{weekdayName}</h2>
                <div className='info'>
                    <h3> Температура: {day.main.temp} C </h3>
                    <h3> Влажность воздуха: {day.main.humidity} % </h3>
                    <h3> Давление: {day.main.pressure} гПа </h3>
                    <h3> Скорость ветра: {day.wind.speed} м/с </h3>
                </div>   
            </section> 
        </div>
    );
};

export default ListInfoOneDay;

 