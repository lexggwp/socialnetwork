import {ActionsType} from "./store";
import {PostType} from "../components/Profile/MyPosts/Post/Post";


export type ProfileStateType = {
    postsData: PostType[],
    newPostText: string
}

export type AddPostACType = ReturnType<typeof AddPostAC>
export type UpdateNewTextACType = ReturnType<typeof updateNewPostTextAC>


const initialState: ProfileStateType = {
    postsData: [
        {id: 1, postMessage: 'Hi how are you?', likesCount: 12},
        {id: 2, postMessage: 'Hi how ?', likesCount: 62},
        {id: 3, postMessage: 'are you?', likesCount: 2},
    ],
    newPostText: ''
}


export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 4, postMessage: state.newPostText, likesCount: 0};
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        case "UPDATE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-TEXT', newText} as const)