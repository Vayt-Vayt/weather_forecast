import React from 'react';
import './ClockDay.css';

const DayInfo = ({day}: any) => {
    const ms = day[1].dt * 1000;
    const weekdayNames = new Date(ms).toLocaleString('ru', {weekday: 'long'})

    function  weekdayName(ms: number){
        return  new Date(ms * 1000).toLocaleString('ru')
    } 

    return (
        <div className='titlContent'>
            <h2 >{weekdayNames}</h2>
            <hr />
            <div className='titleClock'>
                {day.map((a:any, index: number) => 
                    <div key={index} className='infoClock'>
                        <h3 >{weekdayName(a.dt)}</h3>
                        <div className='contentClock'>
                            <ul className='textsClock'>
                                <li>{a.main.temp} С</li>
                                <li>{a.wind.speed} м/с</li> 
                                <li>{a.main.pressure} KPa</li> 
                            </ul>
                            <div className='iconClock'>
                                <i className={`owf owf-${a.weather[0].id} owf-5x`}></i>
                                <p>{a.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DayInfo;