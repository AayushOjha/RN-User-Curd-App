import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IOprionsObject} from '../../services/interfaces/common';
import {Text, useTheme} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

interface StaticSelectorProps {
  fieldLabel: string;
  options: string[];
  isSearchable?: boolean;
  onchange: (value: string) => void;
}

const StaticSelector = ({
  options,
  fieldLabel,
  isSearchable,
  onchange,
}: StaticSelectorProps) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    InputBox: {
      backgroundColor: 'transparent',
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 5,
      width: '100%',
      textAlign: 'left',
    },
    fieldLabel: {
      marginBottom: 12,
    },
  });

  return (
    <View>
      {/* <Text variant="titleMedium" style={styles.fieldLabel}>
        {fieldLabel}
      </Text> */}
      <SelectDropdown
        search={isSearchable || undefined}
        data={options}
        onSelect={selectedItem => {
          onchange(selectedItem);
        }}
        searchPlaceHolder="Type here..."
        defaultButtonText={fieldLabel}
        buttonTextAfterSelection={selectedItem => selectedItem}
        buttonStyle={styles.InputBox}
        rowTextForSelection={item => item}
        buttonTextStyle={{
          textAlign: 'left',
          fontSize: 16,
          color: theme.colors.onSurface,
        }}
      />
    </View>
  );
};

export {StaticSelector};
