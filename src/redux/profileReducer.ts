import {PostType} from "../components/Profile/MyPosts/Post/Post";


export type ProfileInfoType = {
    aboutMe: string
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string | undefined;
        large: string | undefined;
    }
}

export type ProfileStateType = {
    profileInfo: ProfileInfoType | null
    postsData: PostType[],
    newPostText: string,
}

export type AddPostACType = ReturnType<typeof AddPostAC>
export type UpdateNewTextACType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>

export type profileReducerActionsType = AddPostACType | UpdateNewTextACType | SetUserProfileACType

const initialState: ProfileStateType = {
    profileInfo: null,
    postsData: [
        {
            postMessage: 'hellloo',
            id: 3,
            likesCount: 43
        }
    ],
    newPostText: '',
}


export const profileReducer = (state = initialState, action: profileReducerActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 4, postMessage: state.newPostText, likesCount: 0};
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        case "UPDATE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profileInfo: action.profileInfo}
        // case "SET-LOADING-USER":
        //     return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-TEXT', newText} as const)
export const setUserProfileAC = (profileInfo: ProfileInfoType) => ({type: 'SET-USER-PROFILE', profileInfo} as const)
// export const setLoadingUserAC = (isLoading: boolean) => ({type: 'SET-LOADING-USER', isLoading} as const)
