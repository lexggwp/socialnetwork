import s from "./Message.module.css";
import React from "react";
import {MessageType} from "../Dialogs";



export type MessagesPropsType = {
    onChangeMessage: (newText: string) => void;
    addMessage: () => void;
    messagesData: MessageType[];
    newMessageText: string;
}

export const Message = (props: MessagesPropsType) => {

    const textAreaMessage = React.createRef<HTMLTextAreaElement>();

    const onChangeMessage = (e: any) => {
        props.onChangeMessage(e.currentTarget.value)
    }
    const addMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.messages}>
            {props.messagesData.map(el => {
                return (
                    <div key={el.id} className={s.message}>{el.message}</div>
                )
            })}
            <textarea value={props.newMessageText} ref={textAreaMessage} onChange={onChangeMessage}></textarea>
            <div>
                <button onClick={addMessage}>Add</button>
            </div>

        </div>
    )
}