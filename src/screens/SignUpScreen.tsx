import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {AppContainer} from '../components/AppContainer';
import {Button, useTheme, Text} from 'react-native-paper';
import {TextInput} from '../components/Form/TextInput';
import {useFormik} from 'formik';
import {IScreenBaseProps} from '../services/interfaces/common';
import RadioInput from '../components/Form/RadioInput';
// import RadioInput from '../components/Form/RadioInput';

interface SignUpScreenProps extends IScreenBaseProps {}

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const formik = useFormik({
    initialValues: {
      email: undefined,
      password: undefined,
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  // Styles
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    form: {
      width: '100%',
      display: 'flex',
      gap: 20,
      marginTop: 20,
    },
    screenTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.colors.secondary,
    },
    button: {
      fontSize: 30,
    },
    loginTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    loginText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
  });

  return (
    <AppContainer>
      <Text style={styles.screenTitle}>Create Account</Text>
      <View style={styles.form}>
        <TextInput
          fieldName="name"
          onChange={formik.handleChange('name')}
          handleBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Full Name"
        />
        <TextInput
          fieldName="email"
          onChange={formik.handleChange('email')}
          handleBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        <TextInput
          fieldName="phone"
          onChange={formik.handleChange('phone')}
          handleBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Phone No"
        />
        <TextInput
          fieldName="password"
          onChange={formik.handleChange('password')}
          value={formik.values.password}
          type="password"
          placeholder="Password"
        />

        <RadioInput />

        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          onPress={() => formik.handleSubmit()}
          labelStyle={{fontSize: 20}}
          contentStyle={{padding: 3}}>
          Create Account
        </Button>
        <View style={styles.loginTextContainer}>
          <Text>Already have a account?</Text>
          <Text
            onPress={() => {
              navigation.navigate('login');
            }}
            style={styles.loginText}>
            Login
          </Text>
        </View>
      </View>
    </AppContainer>
  );
};

export {SignUpScreen};
