import React, { useState } from 'react';
import Alert from '../alert/Alert';
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './ListWeather.css';

const Forms: React.FC = () => {
    const { coord } = useTypeSelector(state => state.weater)
    const { loadingCity, loadingWeatherGo, loadDays } = useAction()
    const [value, setVelue] = useState('') 
    const [errrorVal, setErrorVal] = useState(false)
    const errorValue = 'Поле вода недолжно быть пустое'
    const getData = (event: any) => {
        event.preventDefault()
        if (value.trim() !== '') {
            loadingCity(value)
            setVelue('')
            loadingWeatherGo()
            if (coord.lat != 0){
                return loadDays()
            }
        } else {
            setErrorVal(true)
            setTimeout(() => {
                setErrorVal(false)
            }, 2000)
        }
    }   
    
    return (
        <div className='forms' >
            <form onSubmit={(e) => getData(e)}>
                {errrorVal && <Alert props={errorValue} />}
                <input 
                    className='myInput'
                    placeholder='Введите название города'
                    type='text'
                    value={value}
                    onChange={(e) => setVelue(e.target.value)}
                />
                <button type='submit'>Узнать погоду</button>
            </form>
        </div>
        
    );
};

export default Forms;