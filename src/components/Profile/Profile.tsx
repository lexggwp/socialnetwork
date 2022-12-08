import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profileReducer";
import Loader from "../UI/Loader/Loader";

type ProfilePropsType = {
    profileInfo: ProfileInfoType,
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            {!props.profileInfo? <Loader/> : <ProfileInfo profileInfo={props.profileInfo}/>}
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;