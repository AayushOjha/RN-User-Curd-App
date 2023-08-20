import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Button, useTheme, Text} from 'react-native-paper';
import {useFormik} from 'formik';
import {AppContainer} from '../components/AppContainer';
import {TextInput} from '../components/Form/TextInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type UserFormProps = NativeStackScreenProps<RootStackParamList, 'userForm'>;

const UserForm = ({navigation, route}: UserFormProps) => {
  // const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      name: undefined,
      email: undefined,
      phone: undefined,
      address: {
        addressLine1: undefined,
        addressLine2: undefined,
        city: undefined,
        pincode: undefined,
        state: undefined,
      },
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
  });

  return (
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
          value={formik.values.address['addressLine1']}
          placeholder="Address Line 1"
        />

        <TextInput
          fieldName="addressLine2"
          onChange={formik.handleChange('address.addressLine2')}
          handleBlur={formik.handleBlur}
          value={formik.values.address['addressLine2']}
          placeholder="Address Line 2"
        />

        <TextInput
          fieldName="city"
          onChange={formik.handleChange('address.city')}
          handleBlur={formik.handleBlur}
          value={formik.values.address['city']}
          placeholder="City"
        />

        <TextInput
          fieldName="pincode"
          onChange={formik.handleChange('address.pincode')}
          handleBlur={formik.handleBlur}
          value={formik.values.address['pincode']}
          placeholder="Pincode"
        />

        <TextInput
          fieldName="state"
          onChange={formik.handleChange('address.state')}
          handleBlur={formik.handleBlur}
          value={formik.values.address['state']}
          placeholder="State"
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
      </View>
    </AppContainer>
  );
};

export {UserForm};
