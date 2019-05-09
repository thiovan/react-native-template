import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import ExampleLoginScreen from '../screens/ExampleLoginScreen';
import ExampleHomeScreen from '../screens/ExampleHomeScreen';

// stack for Login, Register, etc
const AuthStack = createStackNavigator(
  {
    Login: {
      screen: ExampleLoginScreen,
      navigationOptions: () => ({
        title: 'Login'
      })
    }
  },
  {
    initialRouteName: 'Login'
  }
);

// stack for app main screen
const AppStack = createStackNavigator(
  {
    Home: {
      screen: ExampleHomeScreen,
      navigationOptions: () => ({
        title: 'Home'
      })
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth'
  }
);

const AppRoute = createAppContainer(AppNavigator);

export default AppRoute;
