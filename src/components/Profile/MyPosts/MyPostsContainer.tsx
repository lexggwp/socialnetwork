import React from 'react';
import MyPosts from "./MyPosts";
import {Dispatch} from 'redux'
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {AddPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";




type mapDispatchPropsType = {
    addPost: () => void;
    updatePostText: (newText: string) => void;
}

const mapStateToProps = (state: RootState) => ({value: state.profilePage.newPostText, postsData: state.profilePage.postsData})
const mapDispatchToProps = (dispatch: Dispatch ): mapDispatchPropsType => {
    return {
        addPost: () => dispatch(AddPostAC()),
        updatePostText: (newText: string) => dispatch(updateNewPostTextAC(newText))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;