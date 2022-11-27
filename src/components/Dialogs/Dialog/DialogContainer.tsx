import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {Dialog} from "./Dialog";



const mapStateToProps = (state: RootState) => ({dialogsData: state.dialogsPage.dialogsData})
const DialogContainer = connect(mapStateToProps)(Dialog)


export default DialogContainer