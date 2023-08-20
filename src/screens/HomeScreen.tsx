import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Text, useTheme} from 'react-native-paper';
import {UserList} from '../utils/constants';
import {userList} from '../services/interfaces/common';
import {AppContainer} from '../components/AppContainer';
import {isEmpty} from 'lodash';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [usersData, srtUsersData] = useState<userList>(UserList);

  // styling
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    noDataImage: {
      width: '100%',
      height: 300,
      // height: Math.max(windowHeight * 0.3, 300),
    },
  });

  return (
    <AppContainer>
      {!isEmpty(usersData.users) ? (
        <></>
      ) : (
        <>
          <Image
            source={require('../assets/no-data.png')}
            style={styles.noDataImage}
          />
          <Text variant="titleMedium">No User found, Please add one.</Text>
        </>
      )}
    </AppContainer>
  );
};

export default HomeScreen;
