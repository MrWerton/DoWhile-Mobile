import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom:24,
    padding: 10,
    
  },
  message:{
    color: COLORS.WHITE,
    fontSize:15,
    lineHeight:20,
    fontFamily:FONTS.REGULAR,
    marginBottom:12

  },
  userInfo:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center'
  },
  userName:{
    color: COLORS.WHITE,
    marginLeft: 16,
    fontSize:15,
    lineHeight:24,
    fontFamily:FONTS.REGULAR,
    

  }
});