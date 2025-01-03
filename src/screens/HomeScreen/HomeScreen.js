import {StyleSheet, Text, View, Appearance} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

const HomeScreen = () => {
  const colorScheme = Appearance.getColorScheme();
  const [darkTheme, setDarkTheme] = useState(false);
  const [firstCurrencyType, setFirstCurrencyType] = useState('');
  const [secondCurrencyType, setSecondCurrencyType] = useState('');
  const [firstCurrencyValue, setFirstCurrencyValue] = useState('');
  const [secondCurrencyValue, setSecondCurrencyValue] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    if (colorScheme != 'light') {
      setDarkTheme(true);
    }
  }, [colorScheme]);

  useEffect(() => {
    getCurrencyValue();
    setSecondCurrencyValue('')
  }, [firstCurrencyType, secondCurrencyType]);

  const getCurrencyValue = () => {
    const url = `https://v6.exchangerate-api.com/v6/04f663fb0aece8886164bda6/latest/${
      firstCurrencyType ? firstCurrencyType : 'USD'
    }`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res?.result == 'success') {
          setData(res?.conversion_rates);
        } else {
          alert('Something went wrong!!! Try Again!!');
        }
      })
      .catch(error => {
        console.log('catch err', error),
          alert('Something went wrong with Api!!! Try Again!!');
      });
  };

  const firstChange = text => {
    const result = Object.keys(data).map((key)=>[key, data[key]])
    const type = result.map((e)=>e[0] == secondCurrencyType ? e[1] : null)
    const bool = type.find(el => el !== null)
    const final = bool*text
    setFirstCurrencyValue(text);
    setSecondCurrencyValue(final.toString());
  };

  return (
    <View style={[styles.main, darkTheme && {backgroundColor: 'black'}]}>
      <Text style={styles.heading}>Currency Converter App</Text>
      <View style={styles.flexRow}>
        <CustomDropDown
          selectedCurrency={firstCurrencyType}
          setSelectedCurrency={setFirstCurrencyType}
          data={Object.keys(data)}
        />
        <CustomDropDown
          selectedCurrency={secondCurrencyType}
          setSelectedCurrency={setSecondCurrencyType}
          data={Object.keys(data)}
        />
      </View>
      {firstCurrencyType && secondCurrencyType && (
        <View style={styles.flexRow}>
          <CustomTextInput
            value={firstCurrencyValue}
            setValue={setFirstCurrencyValue}
            onChangeText={firstChange}
            first
            Type={firstCurrencyType}
            darkTheme={darkTheme}
          />
          <CustomTextInput
            value={secondCurrencyValue}
            setValue={setSecondCurrencyValue}
            editable={false}
            Type={secondCurrencyType}
            darkTheme={darkTheme}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
