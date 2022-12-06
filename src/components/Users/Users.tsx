import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from 'axios';
import avatar from '../../../src/assets/images/noavatar.jpg'



const Users = (props: UsersPropsType) => {

   !props.users.length && axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
       props.setUsers(response.data.items)
   })


    return (
        <div>
            {props.users.map(el => {
                return (
                    <div className={s.container} key={el.id}>
                        <div className={s.leftBlock}>
                            <div className={s.userPhotoBlock}>
                                <img className={s.userPhoto} src={el.photos.small ? el.photos.small : avatar } alt=""/>
                            </div>
                            <div className={s.followBlock}>
                                {el.followed ? <button onClick={ () => props.toggleFollowMode(el.id)}>Follow</button> :
                                    <button onClick={ () => props.toggleFollowMode(el.id)}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.mainText}>
                                <div className={s.fullName}>{el.name}</div>
                                <div className={s.status}>{el.status}</div>
                            </div>
                            <div className={s.location}>
                                <div className={s.city}>{'el.location.city'}</div>
                                <div className={s.country}>{'el.location.country'}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;