import React from 'react';
import { View,Text } from 'react-native';
import Home from './components/Page/Home';
import Login from './components/Page/Login';
import ECharts from './components/Test/EChart'
import Person from './components/Page/Person'
import Result from './components/Simple/Result'
import ResultList from './components/Page/ResultList';
import Activity from './components/Page/ActivityPage';
import Page from './components/index';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './components/redux/reducer'
import { connect } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import App1 from './App1'
const store = createStore(rootReducer) 
class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
      <App1 />
      </Provider>
    )
  }
}
export default App;