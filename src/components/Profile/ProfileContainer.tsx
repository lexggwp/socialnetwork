import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileInfoType, setUserProfileAC} from "../../redux/profileReducer";
import {RootState} from "../../redux/store";


type ProfileContainersPropsType = {
    profileInfo: ProfileInfoType,
    setUserProfile: (profileInfo: ProfileInfoType) => void;

}

class ProfileContainer extends React.Component<ProfileContainersPropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setUserProfile(response.data)
            }
        )
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileInfo={this.props.profileInfo}/>
            </div>
        );
    }
};

let mapStateToProps = (state: RootState) => (
    {
        profileInfo: state.profilePage.profileInfo,
    }
)
let mapDispatchToProps = {
    setUserProfile: setUserProfileAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);