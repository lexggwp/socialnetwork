import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export type DialogType = {
    id: number,
    name: string
}
export type DialogsPropsType = {
    dialogsData: DialogType[]
}

export const Dialog = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            {props.dialogsData.map(el => {
                return (
                    <div key={el.id} className={s.dialog}>
                        <NavLink to={'/dialogs/' + el.id} className={s.dialogLink}>
                            {el.name}
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}