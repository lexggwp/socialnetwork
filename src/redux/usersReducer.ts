import {ActionsType} from "./store";


export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    photo: string;
    location: {
        city: string,
        country: string
    }
}
export type UsersStateType = {
    users: UserType[];
}
export type ToggleFollowModeACType = ReturnType<typeof toggleFollowModeAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

let initialState: UsersStateType = {
    users: [
        // {id: 1, photo: 'https://i.pinimg.com/280x280_RS/e5/1e/a3/e51ea332f4fa01f227bb2318a9c11646.jpg', followed: false, fullName: 'Alex', status: 'A love you', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photo: 'https://i.pinimg.com/280x280_RS/e5/1e/a3/e51ea332f4fa01f227bb2318a9c11646.jpg', followed: true, fullName: 'Max', status: 'You love ?', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photo: 'https://i.pinimg.com/280x280_RS/e5/1e/a3/e51ea332f4fa01f227bb2318a9c11646.jpg', followed: false, fullName: 'Sasha', status: 'A kkakaka', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
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