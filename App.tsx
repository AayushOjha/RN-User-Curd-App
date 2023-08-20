import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
import {LoginScreen} from './src/screens/LoginScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';
import {THEME_COLOR} from './src/utils/ThemeConstant';
import {ScreenHeader} from './src/components/Header/ScreenHeader';
import HomeScreen from './src/screens/HomeScreen';

export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  home: undefined;
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
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
