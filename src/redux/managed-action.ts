import {Action} from 'redux';

export type ManagedAction<TPayload> = {
    type: string;
    payload: TPayload;
}

interface IActionCreator<P> {
  type: string;
  (payload: P): ManagedAction<P>;
}

export function actionCreator<P>(type: string): IActionCreator<P> {
  return Object.assign(
    (payload: P) => ({type, payload}),
    {type}
  );
}

export function matches<P>(action: Action<any>, actionCreator: IActionCreator<P>): action is ManagedAction<P> {
  return action.type === actionCreator.type;
}