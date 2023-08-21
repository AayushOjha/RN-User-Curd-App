import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {AppContainer} from '../components/AppContainer';
import {Button, useTheme, Text, Snackbar} from 'react-native-paper';
import {TextInput} from '../components/Form/TextInput';
import {useFormik} from 'formik';
import {user} from '../services/apis/User';

import {RadioInput} from '../components/Form/RadioInput';
import {
  CitiesOptions,
  GenderOptions,
  InitialUserData,
  LeadSourceOptions,
  StateOptions,
} from '../utils/constants';
import {CheckBoxInput} from '../components/Form/CheclBoxInput';
import {StaticSelector} from '../components/Form/StaticSelector';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {toggleStringArray} from '../utils/helperFunctions';
import {TSnackBarProps} from '../services/interfaces/common';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'signup'>;

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const formik = useFormik({
    initialValues: InitialUserData,
    onSubmit: values => {
      user
        .register(values)
        .then(res => {
          setSnackBar({
            message: 'User created successfully!',
            action: {
              label: 'Ok',
              onPress: () => {
                setSnackBar(null);
              },
            },
          });
          navigation.replace('home');
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
  });

  const [snackBar, setSnackBar] = useState<TSnackBarProps>(null);

  // Styles
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
      marginTop: 30,
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
    <>
      <AppContainer>
        <Text style={styles.screenTitle}>Create Account</Text>
        <View style={styles.form}>
          <TextInput
            fieldName="name"
            onChange={formik.handleChange('name')}
            handleBlur={formik.handleBlur}
            value={formik.values.name}
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
            value={formik.values.phone}
            placeholder="Phone No"
          />
          <TextInput
            fieldName="password"
            onChange={formik.handleChange('password')}
            value={formik.values.password}
            type="password"
            placeholder="Password"
          />

          <StaticSelector
            fieldLabel="City"
            options={CitiesOptions}
            isSearchable={false}
            onchange={formik.handleChange('city')}
          />

          <StaticSelector
            fieldLabel="State"
            options={StateOptions}
            isSearchable
            onchange={formik.handleChange('state')}
          />

          <RadioInput
            fieldLabel="Select Gender"
            options={GenderOptions}
            onChange={formik.handleChange('gender')}
            currentValue={formik.values.gender}
          />

          <CheckBoxInput
            fieldLabel="How did you hear about this? "
            options={LeadSourceOptions}
            onChange={value => {
              const updatedSources = toggleStringArray(
                formik.values.leadSource,
                value,
              );
              formik.setFieldValue('leadSource', updatedSources);
            }}
            currentValue={formik.values.leadSource}
          />

          <Button
            style={styles.button}
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

      <Snackbar
        visible={snackBar != null}
        onDismiss={() => {
          setSnackBar(null);
        }}
        duration={snackBar?.duration}
        action={snackBar?.action}>
        {snackBar?.message}
      </Snackbar>
    </>
  );
};

export {SignUpScreen};
