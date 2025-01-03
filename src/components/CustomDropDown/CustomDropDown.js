import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const CustomDropDown = ({selectedCurrency, setSelectedCurrency, data}) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.box}>
        <Text style={styles.heading}>
          {selectedCurrency ? selectedCurrency : 'Select Currency'}
        </Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                style={selectedCurrency == item && {backgroundColor : 'green'}}
                  onPress={() => {
                    setSelectedCurrency(item);
                    setOpen(false);
                  }}>
                  <Text
                    style={[
                      styles.dropdownItem,
                      selectedCurrency == item &&
                        styles.dropdownItemSelected,
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default CustomDropDown;
