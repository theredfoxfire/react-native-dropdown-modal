//@flow
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const optionText = {
  textAlign: 'center',
  flex: 1,
};
export default StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(129, 133, 130, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'left',
    height: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#a8a7a4',
    alignItems: 'center',
  },
  option: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  defaultOptionText: {
    ...optionText,
  },
  optionText: {
    ...optionText,
    marginTop: 10,
    width: 80 / 100 * width,
  },
  icon: {
    textAlign: 'center',
    marginTop: 5,
    marginRight: 10,
  },
  scrollViewOption: {
    maxHeight: 50 / 100 * height,
  },
  optionItem: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#a8a7a4',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
