import { COLORS } from "../../theme"

import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper' //suport iphonex

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 10
  }
});