import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer, profileReducerActionsType} from "./profileReducer";
import {AddMessageACType, dialogsReducer, UpdateNewMessageTextACType} from "./dialogsReducer";
import {
    usersReducer,
    usersReducerActionsType
} from "./usersReducer";

export type ActionsType = profileReducerActionsType |
    UpdateNewMessageTextACType | AddMessageACType | usersReducerActionsType


export type RootState = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})



let store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store;