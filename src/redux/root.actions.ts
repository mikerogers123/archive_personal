import { actionCreator } from "./managed-action";

export const setTitleAction = actionCreator<{title: string}>('SET_TITLE');