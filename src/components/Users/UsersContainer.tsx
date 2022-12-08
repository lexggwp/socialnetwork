import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {
    setCurrentPageAC, setLoadingModeAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowModeAC,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import Loader from "../UI/Loader/Loader";

type MapStatePropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
type mapDispatchPropsType = {
    toggleFollowMode: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (usersCount: number) => void;
    setLoadingMode: (isFetching: boolean) => void;

}
type UsersContainerPropsType = MapStatePropsType & mapDispatchPropsType


const mapStateToProps = (state: RootState): MapStatePropsType => (
    {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
)
const mapDispatchToProps = {
    toggleFollowMode: toggleFollowModeAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setLoadingMode: setLoadingModeAC,
}


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setLoadingMode(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items) // перерисовка повторная?
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setLoadingMode(false)
            }
        )

    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setLoadingMode(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setLoadingMode(false)
        })
    }


    render() {
        return (
            this.props.isFetching
                ?
                <Loader/>
                :
                <Users isFetching={this.props.isFetching}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       toggleFollowMode={this.props.toggleFollowMode}
                       setCurrentPage={this.setCurrentPage}
                       currentPage={this.props.currentPage}
                       users={this.props.users}/>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

