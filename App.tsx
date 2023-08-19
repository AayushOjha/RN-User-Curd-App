import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
import {LoginScreen} from './src/screens/LoginScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';
import {THEME_COLOR} from './src/utils/ThemeConstant';
import {ScreenHeader} from './src/components/Header/ScreenHeader';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator>
          <Stack.Screen
            name="LogIn"
            options={{
              header: () => <ScreenHeader title="Login" disableMenu />,
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{
              header: () => <ScreenHeader title="Sign up" disableMenu />,
            }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
