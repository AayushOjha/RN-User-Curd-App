import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Text, useTheme} from 'react-native-paper';
import {UserList} from '../utils/constants';
import {userList} from '../services/interfaces/common';
import {AppContainer} from '../components/AppContainer';
import {isEmpty} from 'lodash';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserOverviewCard} from '../components/UserOverviewCard.tsx';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [usersData, srtUsersData] = useState<userList>(UserList);

  // styling
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    noDataImage: {
      width: '100%',
      height: Math.max(windowHeight * 0.3, 300),
    },
    container: {
      backgroundColor: '#fff',
      flex: 1,
      // paddingTop: 30,
    },
    listContainer: {
      padding: 10,
      paddingBottom: 20,
    },
    listSeparator: {
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      {!isEmpty(usersData.users) ? (
        <SafeAreaView>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={usersData.users}
            ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
            renderItem={({item}) => <UserOverviewCard {...item} />}
            keyExtractor={item => item.phone}
          />
        </SafeAreaView>
      ) : (
        <>
          <Image
            source={require('../assets/no-data.png')}
            style={styles.noDataImage}
          />
          <Text variant="titleMedium">No User found, Please add one.</Text>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
