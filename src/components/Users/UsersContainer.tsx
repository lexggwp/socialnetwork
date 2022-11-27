import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../redux/store";
import {setUsersAC, toggleFollowModeAC, UsersStateType, UserType} from "../../redux/usersReducer";

type MapStatePropsType = {
    users: UserType[]
}

type mapDispatchPropsType = {
    toggleFollowMode: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => ({users: state.usersPage.users})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => ({
        toggleFollowMode: (userID: number) => dispatch(toggleFollowModeAC(userID) ),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    })

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;