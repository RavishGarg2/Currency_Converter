import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    backgroundColor: '#ffbbbb',
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    minWidth : 170
  },
  heading: {
    fontWeight: '600',
    color: 'Green',
    fontSize: 20,
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: '#ffff00',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 40,
    height : 150,
    zIndex : 100,
    position : 'absolute'
  },
  dropdownItem: {
    fontWeight: '400',
    color: 'grey',
    fontSize: 18,
    marginVertical : 5,
    marginHorizontal : 10
  },
  dropdownItemSelected: {
    color: 'white',
    fontWeight: '600',
  },
  line: {borderBottomWidth: 0.5
  },
});

export default styles;
