import React from 'react'
import s from "./Users.module.css";
import avatar from "../../assets/images/noavatar.jpg";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


export type UsersPropsType = {
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    users: UserType[],
    toggleFollowMode: (userID: number) => void,
    pageSize: number,
    totalUsersCount: number,
    isFetching: boolean,
}

export const Users = (props: UsersPropsType) => {

    // let pagesCount = Math.ceil(this.props.totalUsersCount / props.pageSize)
    // пока убрал работу этой переменной, заменил на хардкод 20.
    let pagesArr = [];
    for (let i = 1; i <= 20; i++) {
        pagesArr.push(i)
    }

    return (
        <div>
            <div style={{maxWidth: '800px', textAlign: 'center'}}>
                {pagesArr.map(el =>
                    <span onClick={() => props.setCurrentPage(el)}
                          style={props.currentPage === el ? {
                              fontWeight: 'bold',
                              padding: '2px',
                              cursor: 'pointer'
                          } : {fontWeight: 'normal', padding: '2px', cursor: 'pointer'}}>
                            {el}</span>
                )}

            </div>
            {props.users.map((el) => {
                return (
                    <div className={s.container} key={el.id}>
                        <div className={s.leftBlock}>
                            <div className={s.userPhotoBlock}>
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={s.userPhoto} src={el.photos.small ? el.photos.small : avatar}
                                         alt=""/>
                                </NavLink>

                            </div>
                            <div className={s.followBlock}>
                                {el.followed ?
                                    <button onClick={() => props.toggleFollowMode(el.id)}>Follow</button> :
                                    <button onClick={() => props.toggleFollowMode(el.id)}>Unfollow</button>
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
    )
}