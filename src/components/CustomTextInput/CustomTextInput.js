import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const CustomTextInput = ({value, setValue, onChangeText,editable, first, Type, darkTheme}) => {
  const onChange = text => {
    setValue(text);
  };
  return (
    <View>
    <Text style={styles.headingText}>{first ? 'From' : 'To'} {Type}</Text>
    <TextInput
      multiline={false}
      value={value}
      onChangeText={onChangeText ? onChangeText : onChange}
      style={[styles.main, darkTheme && {backgroundColor : 'white'}]}
      placeholderTextColor={'Grey'}
      placeholder='Enter Value'
      keyboardType='number-pad'
      editable={editable !=undefined ? editable : true}
    />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    width: 170,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontWeight : '500',
    color : 'blue',
  },
  headingText : {
    fontWeight : '500',
    color : 'white',
    fontSize : 18
  }
});
