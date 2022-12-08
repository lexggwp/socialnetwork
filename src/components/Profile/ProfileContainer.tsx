import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileInfoType, setUserProfileAC} from "../../redux/profileReducer";
import {RootState} from "../../redux/store";
import {useLocation, useNavigate, useParams} from "react-router-dom";


type ProfileContainersPropsType = {
    profileInfo: ProfileInfoType | null
    setUserProfile: (profileInfo: ProfileInfoType) => void;
    router: {
        params: {
            userId: string
        }
    }

}

class ProfileContainerClass extends React.Component<ProfileContainersPropsType> {

    componentDidMount() {
        let profileId = this.props.router.params.userId
        if (!profileId) profileId = '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then(response => {
                this.props.setUserProfile(response.data)
            }
        )
    }
    componentDidUpdate(prevProps: ProfileContainersPropsType) {
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== userId) {
            let profileId = 2;
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then((response) => {
                this.props.setUserProfile(response.data)
                });
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Profile {...this.props} profileInfo={this.props.profileInfo}/>
            </div>
        );
    }
}

let mapStateToProps = (state: RootState) => (
    {
        profileInfo: state.profilePage.profileInfo,
    }
)
let mapDispatchToProps = {
    setUserProfile: setUserProfileAC,
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainerClass));;