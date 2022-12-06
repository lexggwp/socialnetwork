import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../redux/store";
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowModeAC,
    UserType
} from "../../redux/usersReducer";

type MapStatePropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type mapDispatchPropsType = {
    toggleFollowMode: (userID: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (usersCount: number) => void;
}

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => (
    {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
)

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => ({
    toggleFollowMode: (userID: number) => dispatch(toggleFollowModeAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
    setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;