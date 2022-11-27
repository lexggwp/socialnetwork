import s from "./Message.module.css";
import React from "react";
import {AddMessageAC, updateNewMessageTextAC} from "../../../redux/dialogsReducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {ActionsType, RootState} from "../../../redux/store";



const mapStateToProps = (state: RootState) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messagesData: state.dialogsPage.messagesData
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => ActionsType) => {
    return {
        addMessage: () => dispatch(AddMessageAC()),
        onChangeMessage: (newText: string) => dispatch(updateNewMessageTextAC(newText))
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer