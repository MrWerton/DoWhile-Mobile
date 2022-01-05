import { COLORS } from './../../theme/colors';
import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 20
  },
  headerRight:{
    flexDirection:'row',
    alignItems: 'center',
  },
  SignOut:{
    fontSize:15,
    color:COLORS.WHITE,
    fontFamily:FONTS.REGULAR,
    marginRight:20,
  },
  
});
