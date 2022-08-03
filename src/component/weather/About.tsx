import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import ListInfoOneDay from './ListInfoOneDay';
import './ListWeather.css';

const About = () => {
    const router = useNavigate()
    const { oneDay, days, clockDays } = useTypeSelector(state => state.weater)

    function backClick() {
        router(`/about`)
   }

    function indexDay() {
        router(`/infoday`)
    } 

    return (
        <div>
            <header className='About-header'>
                <button onClick={backClick}>назад</button>
                <h2>Прогноз погоды на 5 дней в городе: {oneDay.city}</h2>
            </header>
            <main className='daysMap' >
                {days.map((day: any, index: number) => 
                    <section  key={index} onClick={indexDay} className='tooltipOne'>
                        <ListInfoOneDay day={day} />
                        <span className='tooltiptextOne'>Более подробный прогноз, нажмите на поле</span>
                    </section>    
                )}
            </main>
        </div>
    );
};

export default About;