import {View, StyleSheet} from 'react-native';
import React from 'react';
import {RadioButton, Text} from 'react-native-paper';

interface RadioInputProps {
  fieldLabel: string;
  options: {value: string; label: string}[];
  onChange: (value: string) => void;
  currentValue: string;
}

const styles = StyleSheet.create({
  radioItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  item: {
    paddingLeft: 0,
  },
});

const RadioInput = ({
  options,
  onChange,
  currentValue,
  fieldLabel,
}: RadioInputProps) => {
  return (
    <RadioButton.Group
      onValueChange={value => {
        onChange(value);
      }}
      value={currentValue}>
      <Text variant="titleMedium">{fieldLabel}</Text>
      <View style={styles.radioItemContainer}>
        {options.map(option => (
          <RadioButton.Item
            key={option.value}
            value={option.value}
            label={option.label}
            status={option.value === currentValue ? 'checked' : 'unchecked'}
            position="leading"
            style={styles.item}
          />
        ))}
      </View>
    </RadioButton.Group>
  );
};

export {RadioInput};
