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
import Register from './components/Page/Register'
import { createAppContainer, createStackNavigator } from 'react-navigation';
const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      header:null
    }
  },
  Register: {
    screen: Register,
    navigationOptions:{
      header:null
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions:{
      header:null
    }
  },
  Home:{
    screen: Page,
    navigationOptions:{
      header: null
    }
  }
}, {
    initialRouteName: 'Login',
});
const AppContainer = createAppContainer(AppNavigator);
class App1 extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}
export default connect(null, null)(App1)