import React, { useEffect, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import DayInfo from './DayInfo';
import './ClockDay.css';
import { useNavigate } from 'react-router-dom';


const InfoDayClock = () => {
    const {  loadDays } = useAction()  
    const { oneDay, days, clockDays } = useTypeSelector(state => state.weater)
    const [page, setPage] = useState(0)   
    const array = sliceIntoChunks(clockDays, 8)
    const day = array.filter((a, index) =>  index === page)
    function sliceIntoChunks(arr: any, chunkSize: number) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }        
        return res;
    }

    const nextPage = () => array.length -1 === page ? array.length -1 : setPage(page + 1)
    const backPage = () => page <= 0 ? 0 : setPage(page - 1)
    const classNextPage = array.length -1 === page ? '' :  'strelka'
    const classBackPage = page <= 0 ? '' : 'strelkaLeft' 
    const router = useNavigate()
    
    function AboutClick() {
        router(`/about`)
    }

    function InfoClick() {
        loadDays()
        router(`/info`)
    }


    return (
        <div className='titleDay'>
                {<div className='backPage'>
                    <span 
                        className={ classBackPage } 
                        onClick={backPage}
                    />
                </div>}
                {day.map((a, index) => 
                    <DayInfo 
                        key={index} 
                        day={a} 
                        InfoClick={InfoClick} 
                        AboutClick={AboutClick} 

                    />
                )}  
                <div className='nextPage' >
                    <span 
                        className={ classNextPage }
                        onClick={nextPage}
                    />
                </div>     
        </div>
    );
};

export default InfoDayClock;