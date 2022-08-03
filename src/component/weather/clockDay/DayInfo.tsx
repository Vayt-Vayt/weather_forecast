import React from 'react';
import './ClockDay.css';

const DayInfo = ({day, InfoClick, AboutClick}: any) => {
    const ms = day[1].dt * 1000;
    const weekdayNames = new Date(ms).toLocaleString('ru', {weekday: 'long'})

    function  weekdayName(ms: number){
        return  new Date(ms * 1000).toLocaleString('ru')
    } 

    return (
        <div className='titlContent'>
            <header className='header-DayInfo'>
            <div className='bthClock'>
                <button onClick={AboutClick}>на главную</button>
                <button onClick={InfoClick}>назад</button>
            </div>
                <h2 >{weekdayNames}</h2>
            </header>
            <main className='titleClock'>
                {day.map((a:any, index: number) => 
                    <section key={index} className='infoClock'>
                        <h3 >{weekdayName(a.dt)}</h3>
                        <div className='contentClock'>
                            <ul className='textsClock'>
                                <li>{a.main.temp} С</li>
                                <li>{a.wind.speed} м/с</li> 
                                <li>{a.main.pressure} KPa</li> 
                            </ul>
                            <div className='iconClock'>
                                <i id='icon-day' className={`owf owf-${a.weather[0].id} owf-5x`}></i>
                                <p id='icon-text'>{a.weather[0].description}</p>
                            </div>
                        </div> 
                    </section>
                )}
            </main>
        </div>
    );
};

export default DayInfo;