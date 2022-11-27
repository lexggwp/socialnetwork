import {ActionsType} from "./store";
import {DialogType} from "../components/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Dialogs/Dialogs";

export type DialogsStateType = {
        newMessageText: string,
        messagesData: MessageType[]
        dialogsData: DialogType[]
}

export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export type AddMessageACType = ReturnType<typeof AddMessageAC>

let initialState: DialogsStateType = {
        messagesData: [
            {id: 1, message: 'Hello how are you'},
            {id: 2, message: 'Nice to see you!'},
            {id: 3, message: 'I dont know'},
        ],
        newMessageText: '',
        dialogsData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Petr'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Mama'},
        ],
    };


export const dialogsReducer = (state = initialState, action: ActionsType): DialogsStateType => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageText: action.newMessage}
        case "ADD-MESSAGE":
            const newMessage = {id: 25, message: state.newMessageText}
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''}
        default:
            return state
    }
}

export const updateNewMessageTextAC = (newMessage: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage} as const)
export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)