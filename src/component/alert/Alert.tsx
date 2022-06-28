import React from 'react';
import './Alert.css';

const Alert = ({props}: any) => {

    return (
        <div className='alert'>
            <p className='texts'>{props}</p>
        </div>
    );
};

export default Alert;