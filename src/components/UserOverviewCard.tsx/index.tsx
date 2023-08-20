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

interface UserOverviewCardProps {
  name: string;
  email: string;
  phone: string;
}

const UserOverviewCard = ({name, email, phone}: UserOverviewCardProps) => {
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

  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.content}>
          <Avatar.Text size={40} label={getInitials(name)} />
          <View style={styles.nameContainer}>
            <Text variant="titleSmall">{name}</Text>
            <Text variant="bodySmall">{`${email} | ${phone}`}</Text>
          </View>
          <View style={styles.editButtonContainer}>
            <IconButton
              icon="account-edit"
              mode="outlined"
              size={20}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export {UserOverviewCard};
