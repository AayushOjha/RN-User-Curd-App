import {ScrollView, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({children}: AppContainerProps) => {
  // const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 15,
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

  return (
    <ScrollView bounces={false} style={styles.container}>
      <View style={styles.contentContainer}>{children}</View>
    </ScrollView>
  );
};

export {AppContainer};
