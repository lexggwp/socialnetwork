import {AddPostACType, UpdateNewTextACType} from "./profileReducer";
import {
    AddMessageACType,
    UpdateNewMessageTextACType
} from "./dialogsReducer";


// const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, postMessage: 'Hi how are you?', likesCount: 12},
//                 {id: 2, postMessage: 'Hi how ?', likesCount: 62},
//                 {id: 3, postMessage: 'are you?', likesCount: 2},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: 1, message: 'Hello how are you'},
//                 {id: 2, message: 'Nice to see you!'},
//                 {id: 3, message: 'I dont know'},
//             ],
//             newMessageText: '',
//             dialogsData: [
//                 {id: 1, name: 'Alex'},
//                 {id: 2, name: 'Petr'},
//                 {id: 3, name: 'Dima'},
//                 {id: 4, name: 'Anna'},
//                 {id: 5, name: 'Mama'},
//             ],
//         },
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//     _callSubscriber() {
//     },
//     dispatch(action: ActionsType) {
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber()
//     }
// }
//
// export default store