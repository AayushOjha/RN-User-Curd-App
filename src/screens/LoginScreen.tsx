import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Button, useTheme, Text} from 'react-native-paper';
import {useFormik} from 'formik';
import {AppContainer} from '../components/AppContainer';
import {TextInput} from '../components/Form/TextInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: undefined,
      password: undefined,
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  const styles = StyleSheet.create({
    form: {
      width: '100%',
      display: 'flex',
      gap: 20,
      marginTop: 20,
    },
    bannerImage: {
      width: '100%',
      height: Math.max(windowHeight * 0.3, 300),
    },
    button: {
      fontSize: 30,
    },
    signUpTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    signUpText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
  });

  return (
    <AppContainer>
      <Image
        source={require('../assets/login-screen-img.png')}
        style={styles.bannerImage}
      />
      <View style={styles.form}>
        <TextInput
          fieldName="email"
          onChange={formik.handleChange('email')}
          handleBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        <TextInput
          fieldName="password"
          onChange={formik.handleChange('password')}
          value={formik.values.password}
          type="password"
          placeholder="Password"
        />

        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          onPress={() => {
            formik.handleSubmit();
          }}
          labelStyle={{fontSize: 20}}
          contentStyle={{padding: 3}}>
          Submit
        </Button>
        <View style={styles.signUpTextContainer}>
          <Text>Don't have a account?</Text>
          <Text
            onPress={() => {
              navigation.navigate('signup');
            }}
            style={styles.signUpText}>
            create a new account.
          </Text>
        </View>
      </View>
    </AppContainer>
  );
};

export {LoginScreen};
