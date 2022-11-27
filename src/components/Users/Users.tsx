import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'


const Users = (props: UsersPropsType) => {

    !props.users.length && props.setUsers(
        [
        {id: 1, photo: 'https://i.pinimg.com/280x280_RS/e5/1e/a3/e51ea332f4fa01f227bb2318a9c11646.jpg', followed: false, fullName: 'Alex', status: 'A love you', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photo: 'https://i.pinimg.com/280x280_RS/e5/1e/a3/e51ea332f4fa01f227bb2318a9c11646.jpg', followed: true, fullName: 'Max', status: 'You love ?', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photo: 'https://i.pinimg.com/280x280_RS/e5/1e/a3/e51ea332f4fa01f227bb2318a9c11646.jpg', followed: false, fullName: 'Sasha', status: 'A kkakaka', location: {city: 'Kiev', country: 'Ukraine'}},
    ])
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div className={s.container} key={el.id}>
                        <div className={s.leftBlock}>
                            <div className={s.userPhotoBlock}>
                                <img className={s.userPhoto} src={el.photo} alt=""/>
                            </div>
                            <div className={s.followBlock}>
                                {el.followed ? <button onClick={ () => props.toggleFollowMode(el.id)}>Follow</button> :
                                    <button onClick={ () => props.toggleFollowMode(el.id)}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.mainText}>
                                <div className={s.fullName}>{el.fullName}</div>
                                <div className={s.status}>{el.status}</div>
                            </div>
                            <div className={s.location}>
                                <div className={s.city}>{el.location.city}</div>
                                <div className={s.country}>{el.location.country}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;