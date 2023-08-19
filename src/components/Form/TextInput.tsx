import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';

interface TextInputProps {
  fieldName: string;
  value: string | undefined;
  onChange: (value: string) => void;
  type?: 'text' | 'password';
  placeholder?: string;
  handleBlur?: (value: string) => void;
}

const CustomTextInput = ({
  onChange,
  value,
  fieldName,
  handleBlur,
  type = 'text',
  placeholder,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Style object
  const theme = useTheme();
  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: 'transparent',
    },
  });

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChange}
      onBlur={() => {
        handleBlur && handleBlur(fieldName);
      }}
      value={value}
      secureTextEntry={type === 'password' && !showPassword}
      right={
        type === 'password' ? (
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : undefined
      }
      theme={theme}
      mode="outlined"
      label={placeholder}
    />
  );
};

export {CustomTextInput as TextInput};
