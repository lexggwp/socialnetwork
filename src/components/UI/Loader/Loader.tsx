import React from 'react';
import s from './loader.module.css'

const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '80px'}}>
            <div className={s.loading}></div>
        </div>
    );
};

export default Loader;