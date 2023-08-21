import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Button, useTheme, Text, Snackbar} from 'react-native-paper';
import {useFormik} from 'formik';
import {AppContainer} from '../components/AppContainer';
import {TextInput} from '../components/Form/TextInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {TSnackBarProps} from '../services/interfaces/common';
import {useState} from 'react';
import {user} from '../services/apis/User';
import {AxiosError} from 'axios';
import {storeData} from '../utils/helperFunctions';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>;

interface formState {
  email?: string;
  password?: string;
}

const initialValue: formState = {};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [snackBar, setSnackBar] = useState<TSnackBarProps>(null);
  const [isLoading, setIsLoading] = useState(false);

  // style
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: ({email, password}) => {
      setIsLoading(true);
      if (email && password) {
        user
          .signIn({email, password})
          .then(res => {
            console.log(res.data);
            storeData('token', res.data.token)
              .then(() => {
                navigation.navigate('home');
              })
              .catch(err =>
                console.log('enable to store token in local storage'),
              );
          })
          .catch((err: AxiosError) => {
            console.log(err.response?.data);
          })
          .finally(() => setIsLoading(false));
      } else {
        setSnackBar({
          message: 'Please fill all fields',
          action: {
            label: 'Ok',
            onPress: () => {
              setSnackBar(null);
            },
          },
        });
      }
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
    <>
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
            loading={isLoading}
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

export {LoginScreen};
