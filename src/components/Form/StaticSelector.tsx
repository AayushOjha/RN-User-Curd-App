import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IOprionsObject} from '../../services/interfaces/common';
import {Text, useTheme} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

interface StaticSelectorProps {
  fieldLabel: string;
  options: string[];
  isSearchable?: boolean;
}

const StaticSelector = ({
  options,
  fieldLabel,
  isSearchable,
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
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        searchPlaceHolder="Type here..."
        defaultButtonText={fieldLabel}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        buttonStyle={styles.InputBox}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
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
