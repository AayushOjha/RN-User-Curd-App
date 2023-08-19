import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTheme} from 'react-native-paper';

type Props = {
  title: string;
  disableMenu?: boolean;
};

type IMenu = {
  menu_link: string;
  menu_name: string;
};

const {height} = Dimensions.get('window');

const ScreenHeader = ({title, disableMenu}: Props) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    headerContainer: {
      position: 'relative',
      backgroundColor: '#fff',
    },
    header: {
      height: 120,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: theme.colors.primary,
      shadowColor: '#000',
      elevation: 25,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginTop: height * 0.07,
      paddingHorizontal: 20,
    },
    headerText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 22,
    },
    PopContentContainer: {
      position: 'absolute',
      top: height * 0.07 + 40,
      height: 'auto',
      width: '90%',
      marginLeft: '5%',
      padding: 20,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    PopMainContainer: {
      flex: 1,
    },
    menuItem: {
      height: 40,
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onPrimary,
    },
  });

  const [menu, setMenu] = useState<IMenu[]>([]);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  // useEffect(() => {
  //   MENU.fetchList().then((menu) => setMenu(menu));
  // }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>{title}</Text>
          {!disableMenu ? (
            <View>
              <TouchableOpacity onPress={toggleMenu}>
                {menuVisible ? (
                  <Entypo name="cross" size={28} color="#fff" />
                ) : (
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={28}
                    color="#fff"
                  />
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => {
          setMenuVisible(false);
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setMenuVisible(false);
          }}>
          <View style={styles.PopMainContainer}>
            <View style={styles.PopContentContainer}>
              {menu.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setMenuVisible(false);
                    Linking.openURL(item.menu_link);
                  }}>
                  <Text key={index} style={styles.menuItem}>
                    {item.menu_name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export {ScreenHeader};
