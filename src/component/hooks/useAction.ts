import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { ActionCreators } from "../redux/store/action"


export function useAction() {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
