import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileInfoType} from "../../../redux/profileReducer";
type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.background}
                     src="https://www.agoda.com/wp-content/uploads/2019/06/What-to-do-in-Singapore-Featured-photo-1200x350-Singapore-city-scape.jpg"
                     alt=""/>
            </div>
            <div className={s.description}>
                <span>{props.profileInfo.aboutMe}</span>
                <img src={props.profileInfo.photos.large} alt=""/>
            </div>
        </div>
    );


};

export default ProfileInfo;