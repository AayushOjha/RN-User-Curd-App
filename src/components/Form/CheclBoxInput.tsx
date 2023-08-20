import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Checkbox, Text} from 'react-native-paper';
import {includes, startCase} from 'lodash';

interface CheckBoxInputProps {
  fieldLabel: string;
  // options: Record<string, boolean>;
  onChange: (key: string, value: boolean) => void;
  currentValue: Record<string, boolean>;
}

const styles = StyleSheet.create({
  radioItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  item: {
    paddingLeft: 0,
  },
});

const CheckBoxInput = ({
  onChange,
  currentValue,
  fieldLabel,
}: CheckBoxInputProps) => {
  console.log(currentValue);
  return (
    <View>
      <Text variant="titleMedium">{fieldLabel}</Text>
      <View style={styles.radioItemContainer}>
        {Object.keys(currentValue).map(item => (
          <Checkbox.Item
            key={item}
            label={startCase(item)}
            status={currentValue[item] ? 'checked' : 'unchecked'}
            onPress={() => {
              onChange(item, !currentValue[item]);
            }}
            position="leading"
            style={styles.item}
          />
        ))}
      </View>
    </View>
  );
};

export {CheckBoxInput};
