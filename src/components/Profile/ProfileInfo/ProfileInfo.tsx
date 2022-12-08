import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileInfoType} from "../../../redux/profileReducer";
import profileNoAvatar from '../../../assets/images/profileAvatar.png'
type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div className={s.profileInfo}>
                <div className={s.profilePhotoBlock}>
                    <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large: profileNoAvatar} alt=""/>
                </div>
                <div className={s.profileMainBlock}>
                    <div className={s.fullName}>
                        {props.profileInfo.fullName}
                    </div>
                    <div className={s.contacts}>
                        <div className={s.contact}>
                        Facebook <span className={s.contactDescription}>{props.profileInfo.contacts.facebook}</span>
                        </div>
                        <div className={s.contact}>
                            Github
                        <span className={s.contactDescription}>{props.profileInfo.contacts.github}</span>
                        </div>
                        <div className={s.contact}>
                            VK
                        <span className={s.contactDescription}>{props.profileInfo.contacts.vk}</span>
                        </div>
                        <div className={s.contact}>
                            Instagram
                        <span className={s.contactDescription}>{props.profileInfo.contacts.instagram}</span>
                        </div>
                        <div className={s.contact}>
                            twitter
                        <span className={s.contactDescription}>{props.profileInfo.contacts.twitter}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default ProfileInfo;