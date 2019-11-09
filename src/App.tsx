import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { StoreState } from './redux/root.types';
import { setTitleAction } from './redux/root.actions';
import { ThunkDispatch } from 'redux-thunk';
import { ManagedAction } from './redux/managed-action';

class App extends React.Component<StoreState> {
  render() {
    return <p>{this.props.title}</p>;
  }
}

const mapStateToProps = (store: StoreState) => {
  return {
    title: store.title
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, ManagedAction<any>>) => {
  return {
    setTitle: (title: string) => dispatch(setTitleAction({title}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
