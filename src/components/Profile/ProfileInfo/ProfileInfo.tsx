import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.background}
                     src="https://www.agoda.com/wp-content/uploads/2019/06/What-to-do-in-Singapore-Featured-photo-1200x350-Singapore-city-scape.jpg"
                     alt=""/>
            </div>
            <div className={s.description}>
                ava + descr
            </div>
        </div>
    );
};

export default ProfileInfo;