import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height:45,
    width:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
  },
  title:{
    fontSize:14,
    fontFamily:FONTS.BOLD,
    marginLeft:15

  }
});