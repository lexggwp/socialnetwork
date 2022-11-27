import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";


export type MyPostsPropsType = {
    addPost: () => void;
    updatePostText: (newText: string) => void;
    value: string
    postsData: PostType[]
}

const MyPosts = (props: MyPostsPropsType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost();
    }
    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)

    }
    return (
        <div className={s.content}>
            <h3>myPosts</h3>
            <div>
                <div>
                    <textarea onChange={updatePostText} value={props.value} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <Post postsData={props.postsData}/>
        </div>

    );
};

export default MyPosts;