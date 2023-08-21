import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
import {LoginScreen} from './src/screens/LoginScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';
import {THEME_COLOR} from './src/utils/ThemeConstant';
import {ScreenHeader} from './src/components/Header/ScreenHeader';
import HomeScreen from './src/screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {IUserListItem} from './src/services/interfaces/common';
import {UserForm} from './src/screens/UserForm';

export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  home: undefined;
  userForm: IUserListItem | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  dark: true,
  roundness: 5,
  colors: {
    ...MD3LightTheme.colors,
    ...THEME_COLOR,
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen
              name="login"
              options={{
                header: () => <ScreenHeader title="Login" disableMenu />,
              }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="signup"
              options={{
                header: () => <ScreenHeader title="Sign up" disableMenu />,
              }}
              component={SignUpScreen}
            />
            <Stack.Screen
              name="home"
              options={{
                header: () => <ScreenHeader title="Home" />,
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="userForm"
              options={{
                header: () => <ScreenHeader title="User" />,
              }}
              component={UserForm}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
