import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';

interface RadioInputProps {
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

const RadioInput = ({options, onChange, currentValue}: RadioInputProps) => {
  return (
    <RadioButton.Group
      onValueChange={value => {
        onChange(value);
      }}
      value={currentValue}>
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

export default RadioInput;
