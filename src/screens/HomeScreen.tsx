import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {FAB, Text, useTheme} from 'react-native-paper';
import {UserList} from '../utils/constants';
import {IUserList} from '../services/interfaces/common';
import {isEmpty} from 'lodash';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserOverviewCard} from '../components/UserOverviewCard.tsx';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [usersData, srtUsersData] = useState<IUserList>(UserList);

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
    },
    listContainer: {
      padding: 10,
      paddingBottom: 20,
    },
    listSeparator: {
      marginTop: 10,
    },
    fab: {
      backgroundColor: theme.colors.primary,
      color: '#fff',
      position: 'absolute',
      bottom: 40,
      right: 25,
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
            renderItem={({item}) => <UserOverviewCard user={{...item}} />}
            keyExtractor={item => item.phone}
          />
          <FAB
            icon="plus"
            color="#fff"
            style={styles.fab}
            onPress={() => navigation.navigate('userForm')}
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
