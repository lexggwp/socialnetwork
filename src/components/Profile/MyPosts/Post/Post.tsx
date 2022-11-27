import React from 'react';
import s from "./Post.module.css"


export type PostType = {
    postMessage: string,
    id: number,
    likesCount: number
}

export type PostsPropsType = {
    postsData: PostType[]
}

const Post = (props: PostsPropsType) => {
    return (
        <div className={s.posts}>
            {props.postsData.map(el => {
                return (
                    <div key={el.id} className={s.post}>
                        <img src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" alt=""/>
                        {el.postMessage}
                        <div >
                            <span>likes: {el.likesCount}</span>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default Post;