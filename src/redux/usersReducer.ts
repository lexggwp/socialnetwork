
export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | any,
        large: string | any
    },
    status: string | null,
    followed: boolean,
}
export type UsersStateType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number,
    currentPage: number,
}
export type ToggleFollowModeACType = ReturnType<typeof toggleFollowModeAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
export type SetTotalUserCountACType = ReturnType<typeof setTotalUsersCountAC>


export type usersReducerActionsType = ToggleFollowModeACType | SetUsersACType | SetCurrentPage| SetTotalUserCountACType ;

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}




export const usersReducer = (state = initialState, action: usersReducerActionsType) => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW-MODE':
            return {...state, users: state.users
                    .map(el => el.id === action.userID ? {...el, followed: !el.followed} : el)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-USERS-COUNT":
            return {...state, totalUsersCount: action.usersCount}
        default:
            return state
    }
}

export const toggleFollowModeAC = (userID: number) => ({type: 'TOGGLE-FOLLOW-MODE', userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (usersCount: number) => ({type: 'SET-USERS-COUNT', usersCount} as const)
