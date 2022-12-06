import {ActionsType} from "./store";


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
}
export type ToggleFollowModeACType = ReturnType<typeof toggleFollowModeAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

let initialState: UsersStateType = {
    users: []
}


export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW-MODE':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: !el.followed} : el)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const toggleFollowModeAC = (userID: number) => ({type: 'TOGGLE-FOLLOW-MODE', userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)