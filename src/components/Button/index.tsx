import React from 'react';
import { ColorValue, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

import {
  Text,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title:string,
  color: ColorValue,
  backgroundColor: ColorValue,
  icon?: React.ComponentProps<typeof AntDesign>['name'],
  sizeIcon?: number,
  isLoading?: boolean,
}


 function Button({
   title, 
  color, 
  backgroundColor,
  icon,
  sizeIcon, 
  isLoading=false,
  ...rest}:Props){
  return (
    <TouchableOpacity 
    style=
    {[styles.button, {backgroundColor}]}
    {...rest}
    activeOpacity={0.8}
    disabled={isLoading}
    >
  {
    isLoading ? <ActivityIndicator color={color}/> : 
    <>
      <AntDesign name={icon} size={sizeIcon}/>
        <Text style={[styles.title, {color}]}>
          {title}
        </Text>
     </>
  }
  </TouchableOpacity>
  );
}

export {Button}