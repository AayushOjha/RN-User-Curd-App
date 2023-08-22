import {View, StyleSheet} from 'react-native';
import {Button, useTheme, Text, Snackbar} from 'react-native-paper';
import {useFormik} from 'formik';
import {AppContainer} from '../components/AppContainer';
import {TextInput} from '../components/Form/TextInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {user} from '../services/apis/User';
import {IUserListItem, TSnackBarProps} from '../services/interfaces/common';
import {storeData} from '../utils/helperFunctions';
import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

type UserFormProps = NativeStackScreenProps<RootStackParamList, 'userForm'>;

const UserForm = ({navigation, route}: UserFormProps) => {
  const [snackBar, setSnackBar] = useState<TSnackBarProps>(null);
  const [isLoading, setIsLoading] = useState(false);

  // const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const formik = useFormik({
    initialValues: route.params?.user
      ? route.params.user
      : ({
          name: '',
          email: '',
          phone: '',
          address: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            pinCode: '',
            state: '',
          },
        } as IUserListItem),
    onSubmit: values => {
      setIsLoading(true);
      if (route.params?.user) {
        user
          .updateContact(values, route.params.token, route.params.user._id)
          .then(res => {
            storeData('users', JSON.stringify({users: res.data})).then(res =>
              navigation.pop(),
            );
          })
          .catch(err => {
            setSnackBar({
              message: JSON.stringify('Please fill All require fields'), //err.response.data.error),
              action: {label: 'Ok', onPress: () => setSnackBar(null)},
            });
          })
          .finally(() => setIsLoading(false));
      } else {
        user
          .addContact(values, route.params.token)
          .then(res => {
            storeData('users', JSON.stringify({users: res.data})).then(res =>
              navigation.pop(),
            );
          })
          .catch(err => {
            setSnackBar({
              message: JSON.stringify('Please fill All require fields'), //err.response.data.error),
              action: {label: 'Ok', onPress: () => setSnackBar(null)},
            });
          })
          .finally(() => setIsLoading(false));
      }
    },
  });

  useFocusEffect(
    useCallback(() => {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          const timeout = setTimeout(() => {
            navigation.pop();
          }, 5000);
          setSnackBar({
            message: JSON.stringify('Please Connect to Internet'),
            action: {
              label: 'Ok',
              onPress: () => {
                clearTimeout(timeout);
                navigation.pop();
              },
            },
          });
        }
      });
    }, []),
  );

  const styles = StyleSheet.create({
    form: {
      width: '100%',
      display: 'flex',
      gap: 20,
      marginTop: 20,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      width: '100%',
    },
    cancelButton: {
      borderRadius: 5,
      flex: 1,
    },
    saveButton: {
      borderRadius: 5,
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
  });

  return (
    <>
      <AppContainer>
        <View style={styles.form}>
          <TextInput
            fieldName="name"
            onChange={formik.handleChange('name')}
            handleBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Full Name *"
          />
          <TextInput
            fieldName="email"
            onChange={formik.handleChange('email')}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email *"
          />
          <TextInput
            fieldName="phone"
            onChange={formik.handleChange('phone')}
            handleBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder="Phone No *"
          />

          <Text variant="titleMedium">Address</Text>

          <TextInput
            fieldName="addressLine1"
            onChange={formik.handleChange('address.addressLine1')}
            handleBlur={formik.handleBlur}
            value={formik.values.address?.['addressLine1']}
            placeholder="Address Line 1"
          />

          <TextInput
            fieldName="addressLine2"
            onChange={formik.handleChange('address.addressLine2')}
            handleBlur={formik.handleBlur}
            value={formik.values.address?.['addressLine2']}
            placeholder="Address Line 2"
          />

          <TextInput
            fieldName="city"
            onChange={formik.handleChange('address.city')}
            handleBlur={formik.handleBlur}
            value={formik.values.address?.['city']}
            placeholder="City"
          />

          <TextInput
            fieldName="pinCode"
            onChange={formik.handleChange('address.pinCode')}
            handleBlur={formik.handleBlur}
            value={formik.values.address?.['pinCode'] || undefined}
            placeholder="pinCode"
          />

          <TextInput
            fieldName="state"
            onChange={formik.handleChange('address.state')}
            handleBlur={formik.handleBlur}
            value={formik.values.address?.['state']}
            placeholder="State"
          />

          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              style={styles.cancelButton}
              onPress={() => {
                navigation.pop();
              }}
              labelStyle={{fontSize: 20}}
              contentStyle={{padding: 3}}>
              Cancel
            </Button>
            <Button
              mode="contained"
              loading={isLoading}
              style={styles.saveButton}
              onPress={() => {
                formik.handleSubmit();
              }}
              labelStyle={{fontSize: 20}}
              contentStyle={{padding: 3}}>
              Save
            </Button>
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

export {UserForm};
