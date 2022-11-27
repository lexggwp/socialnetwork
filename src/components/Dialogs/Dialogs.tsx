import React from 'react';
import s from './Dialogs.module.css'
import MessageContainer from "./Message/MessageContainer";
import DialogContainer from "./Dialog/DialogContainer";


export type MessageType = { id: number, message: string }


const Dialogs = () => {
    return (
        <div className={s.content}>
                <DialogContainer/>
                <MessageContainer/>
        </div>
    );
};

export default Dialogs;