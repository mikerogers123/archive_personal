import { initialState } from "./root.types";
import { Action } from "redux";
import { setTitleAction } from "./root.actions";
import { matches } from "./managed-action";

export default function(state = initialState, action: Action) {
    if (matches(action, setTitleAction)) {
        return {
            ...state,
            title: action.payload.title
        }
    }

    return state;
}