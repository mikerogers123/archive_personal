import { connect } from 'react-redux';
import { StoreState } from './root.types';
import React from 'react';
import { ComponentProps } from './component-props';
import { ActionCreator } from 'redux';

const mapStateToProps = (store: StoreState) => store;

export const connectComponent = connect(mapStateToProps);

export abstract class ConnectedComponent extends React.Component<ComponentProps> {
  protected dispatch<P>(action: ActionCreator<P>) {
    this.props.dispatch(action);
  }

  protected get storeState() {
    return this.props as Readonly<StoreState>;
  }
}