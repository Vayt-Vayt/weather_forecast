import React from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../alert/Alert';
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Loader from '../loader/Loader';
import './ListWeather.css';

const Info: React.FC = () => {
    const { oneDay, error, coord, loader } = useTypeSelector(state => state.weater)
    const { loadDays } = useAction()
    const router = useNavigate()
    const icon = `owf owf-${oneDay.weather[0].id} owf-5x`
    const descriptionLoad = oneDay.weather[0].description

    function handleClick() {
        loadDays()
        router(`/info`)
    }

    if (loader) {
        return <Loader />
    }

    if (oneDay.city === ''){
        return null
    }

    if (error) {
        return <Alert props={error} />
    }

    return (
        <div className='contant'>
            <section className='container'>
                <h1 className='titls'>{oneDay.city}</h1>
                <div className='info'>
                    <h3> Температура: {oneDay.temp} C </h3>
                    <h3> Влажность воздуха: {oneDay.humidity} % </h3>
                    <h3> Давление: {oneDay.pressure} гПа </h3>
                    <h3> Скорость ветра: {oneDay.speed} м/с </h3>
                    <div className='iconDay'>
                        <i className={icon}></i>
                        <p className='description'>{descriptionLoad}</p>
                    </div>
                </div>
            </section>
            <section className='tooltip'>
                <span className='strelka' onClick={() => handleClick()}/>
                <span className='tooltiptext'>Изменение погоды на 5 дней</span>
            </section>
        </div>
    );
};

export default Info;