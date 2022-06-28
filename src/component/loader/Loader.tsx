import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='title'>
            <h2 className='text'>Идет загрузка...</h2>
            <div className='loader' />
        </div>
    );
};

export default Loader;