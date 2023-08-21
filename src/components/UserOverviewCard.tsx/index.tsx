import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Text,
  useTheme,
} from 'react-native-paper';
import {getInitials} from '../../utils/helperFunctions';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IUserListItem} from '../../services/interfaces/common';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
interface UserOverviewCardProps {
  user: IUserListItem;
  token: string;
}

const UserOverviewCard = ({user, token}: UserOverviewCardProps) => {
  // styling
  // const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 20,
    },
    nameContainer: {
      flex: 1,
    },
    editButtonContainer: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
    },
  });

  const navigation = useNavigation<NavigationProps>();
  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.content}>
          <Avatar.Text size={40} label={getInitials(user.name || '')} />
          <View style={styles.nameContainer}>
            <Text variant="titleSmall">{user.name}</Text>
            <Text variant="bodySmall">{`${user.email} | ${user.phone}`}</Text>
          </View>
          <View style={styles.editButtonContainer}>
            <IconButton
              icon="account-edit"
              mode="outlined"
              size={20}
              onPress={() => {
                navigation.navigate('userForm', {user, token});
              }}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export {UserOverviewCard};
