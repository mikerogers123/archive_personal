import { ManagedAction } from "./managed-action";
import { StoreState } from "./root.types";
import { ThunkDispatch } from "redux-thunk";

type DispatchProps = {dispatch: ThunkDispatch<any, any, ManagedAction<any>>}

export type ComponentProps = DispatchProps & StoreState;