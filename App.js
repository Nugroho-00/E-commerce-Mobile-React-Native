import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersisGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen'

import store  from './src/redux/store'

import Main from './src/main/Main'

export default class App extends Component { 
  // componentDidMount() {
  //     SplashScreen.hide();
  // }

  render() { 
    return (
      <Provider store={store}>
        {/* <PersisGate loading={null} persistor={persistor}> */}
        <Main />
        {/* </PersisGate>    */}
      </Provider>
    )
  }
}