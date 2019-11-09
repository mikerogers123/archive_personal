import {Action} from 'redux';

export type ManagedAction<TPayload> = {
    type: string;
    payload: TPayload;
}

interface ActionCreator<P> {
  type: string;
  (payload: P): ManagedAction<P>;
}

export function actionCreator<P>(type: string): ActionCreator<P> {
  return Object.assign(
    (payload: P) => ({type, payload}),
    {type}
  );
}

export function matches<P>(action: Action<any>, actionCreator: ActionCreator<P>): action is ManagedAction<P> {
  return action.type === actionCreator.type;
}