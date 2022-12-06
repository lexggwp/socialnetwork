import {combineReducers, legacy_createStore as createStore} from "redux";
import {AddPostACType, profileReducer, ProfileStateType, UpdateNewTextACType} from "./profileReducer";
import {AddMessageACType, dialogsReducer, DialogsStateType, UpdateNewMessageTextACType} from "./dialogsReducer";
import {SetUsersACType, ToggleFollowModeACType, usersReducer} from "./usersReducer";

export type ActionsType = AddPostACType | UpdateNewTextACType |
    UpdateNewMessageTextACType | AddMessageACType | ToggleFollowModeACType |
    SetUsersACType


export type RootState = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})



let store = createStore(reducers);

export default store;